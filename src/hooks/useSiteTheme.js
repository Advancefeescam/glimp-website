import { useEffect, useState } from 'react';

const STORAGE_KEY = 'glimp-website-theme';

function getInitialTheme() {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === 'light' || saved === 'dark') return saved;
  } catch {
    // Private browsing may block storage.
  }
  return 'light';
}

export function useSiteTheme() {
  const [mode, setMode] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.style.colorScheme = mode;
    document.querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', mode === 'dark' ? '#101722' : '#f7f9ff');
    try {
      window.localStorage.setItem(STORAGE_KEY, mode);
    } catch {
      // Theme selection still works when storage is disabled.
    }
  }, [mode]);

  const toggleTheme = () => setMode((current) => current === 'dark' ? 'light' : 'dark');
  return { mode, toggleTheme };
}
