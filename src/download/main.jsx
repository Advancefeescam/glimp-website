import React from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource-variable/manrope';
import '@fontsource/dm-mono/400.css';
import '@fontsource/dm-mono/500.css';
import '../icons';
import '../styles/base.css';
import '../styles/download.css';
import DownloadPage from './DownloadPage';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DownloadPage />
  </React.StrictMode>,
);
