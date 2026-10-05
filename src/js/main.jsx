// SCSS
import '../scss/main.scss';

// MDB
import { Ripple, Collapse, initMDB } from 'mdb-ui-kit/js/mdb.es.min.js';

// React
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

function AppManager() {
  const renderApp = () => {
    const rootElement = document.querySelector('#root');

    if (rootElement) {
      createRoot(rootElement).render(
        <StrictMode>
          <App />
        </StrictMode>
      );
    }
  };

  const initApp = () => {
    initMDB({ Ripple, Collapse });
    renderApp();
  };

  return { initApp };
}

document.addEventListener('DOMContentLoaded', () => {
  const app = AppManager();
  app.initApp();
});
