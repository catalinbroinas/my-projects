import '../scss/main.scss';

// MDB
import { Ripple, Collapse, initMDB } from 'mdb-ui-kit/js/mdb.es.min.js';

// React
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

function MainDomManager() {
     const renderContent = () => {
        const rootElement = document.querySelector('#root');

        if (rootElement) {
            createRoot(rootElement).render(
                <StrictMode>
                    <h1 className='h1 text-center p-5'>React work!</h1>
                </StrictMode>
            );
        }
    };

    const initApp = () => {
        initMDB({ Ripple, Collapse });
        renderContent();
    };

    return { initApp };
}

document.addEventListener('DOMContentLoaded', () => {
    const domManager = MainDomManager();
    domManager.initApp();
});
