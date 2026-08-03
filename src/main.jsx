import { createRoot } from 'react-dom/client'

import App from './App';
import './index.css'

const root = createRoot(document.getElementById('root'),{
  identifierPrefix: 'my-react',
});

root.render(<App />);
