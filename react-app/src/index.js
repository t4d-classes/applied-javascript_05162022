import { createRoot } from 'react-dom/client';

import { HelloWorld } from './components/HelloWorld';

const root = createRoot(document.querySelector('#root'));
// root.render(React.createElement(HelloWorld));
root.render(<HelloWorld />);

