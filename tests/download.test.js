import test from 'node:test';
import assert from 'node:assert/strict';
import { architectures, fetchLatestRelease, formatSize } from '../src/download/releases.js';

const base = 'https://github.com/Advancefeescam/glimp/releases/download/v-test/';
const asset = (abi) => ({
  state: 'uploaded',
  name: 'Glimp-v-test-' + abi + '.apk',
  browser_download_url: base + 'Glimp-v-test-' + abi + '.apk',
  size: 52428800,
  digest: 'sha256:' + 'a'.repeat(64),
});

test('vier herkenbare APK-architecturen zijn beschikbaar in de kiezer', () => {
  assert.deepEqual(architectures.map((item) => item.abi), [
    'universal', 'arm64-v8a', 'armeabi-v7a', 'x86_64',
  ]);
  assert.equal(architectures.find((item) => item.recommended)?.id, 'universal');
});

test('assetkoppeling matcht exact op architectuur, grootte en SHA-256', async () => {
  const original = globalThis.fetch;
  const seen = [];
  globalThis.fetch = async (url) => {
    seen.push(url);
    return {
      ok: true,
      json: async () => ({
        tag_name: 'v-test',
        published_at: '2026-11-06T12:00:00Z',
        html_url: 'https://github.com/Advancefeescam/glimp/releases/tag/v-test',
        assets: [
          asset('arm64-v8a'), asset('armeabi-v7a'), asset('universal'), asset('x86_64'),
        ],
      }),
    };
  };
  try {
    const result = await fetchLatestRelease();
    assert.equal(result.version, 'v-test');
    assert.equal(result.assets.arm64.name, 'Glimp-v-test-arm64-v8a.apk');
    assert.equal(result.assets.armv7.name, 'Glimp-v-test-armeabi-v7a.apk');
    assert.equal(result.assets.universal.name, 'Glimp-v-test-universal.apk');
    assert.equal(result.assets.x86.name, 'Glimp-v-test-x86_64.apk');
    assert.equal(result.assets.arm64.size, 52428800);
    assert.equal(result.assets.arm64.digest, 'a'.repeat(64));
    assert.match(seen[0], /api\.github\.com\/repos\/Advancefeescam\/glimp\/releases\/latest/);
  } finally {
    globalThis.fetch = original;
  }
});

test('geen downloadlink maken wanneer release privé of onbereikbaar is', async () => {
  const original = globalThis.fetch;
  globalThis.fetch = async () => ({ ok: false, status: 404 });
  try {
    await assert.rejects(() => fetchLatestRelease(), /niet publiek opvraagbaar/);
  } finally {
    globalThis.fetch = original;
  }
});

test('een downloadlink buiten officiële GitHub Releases wordt genegeerd', async () => {
  const original = globalThis.fetch;
  globalThis.fetch = async () => ({
    ok: true,
    json: async () => ({
      tag_name: 'v-test',
      assets: [{ ...asset('universal'), browser_download_url: 'https://example.org/unknown.apk' }],
    }),
  });
  try {
    const result = await fetchLatestRelease();
    assert.equal(result.assets.universal, null);
  } finally {
    globalThis.fetch = original;
  }
});

test('formatteert APK-groottes leesbaar', () => {
  assert.equal(formatSize(1048576), '1 MB');
  assert.equal(formatSize(0), 'Onbekend');
});
