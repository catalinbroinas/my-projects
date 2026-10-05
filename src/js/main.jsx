// SCSS
import '../scss/main.scss';

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
    renderApp();
  };

  return { initApp };
}

document.addEventListener('DOMContentLoaded', () => {
  const app = AppManager();
  app.initApp();
});
