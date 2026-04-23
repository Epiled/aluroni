import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'normalize.css';
import './index.css';
import Router from './routes';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error(
    "Failed to find the root element. Make sure there is a <div id='root'></div> in your index.html.",
  );
}

createRoot(rootElement).render(
  <StrictMode>
    <Router />
  </StrictMode>,
);
