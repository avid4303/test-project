import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import './index.css'

const root = createRoot(document.getElementById('root'),{
  identifierPrefix: 'my-react',
});

root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
