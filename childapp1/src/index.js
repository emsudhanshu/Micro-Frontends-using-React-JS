import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

window.renderChild1 = (containerId, history) => {
 ReactDOM.render(
   <App history={history} />,
   document.getElementById(containerId),
 );
};

window.unmountChild1 = containerId => {
 ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

if (!document.getElementById('Child1-container')) {
 ReactDOM.render(<App />, document.getElementById('root'));
}