import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

window.renderChild2 = (containerId, history) => {
 ReactDOM.render(
   <App history={history} />,
   document.getElementById(containerId),
 );
};

window.unmountChild2 = containerId => {
 ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

if (!document.getElementById('Child2-container')) {
 ReactDOM.render(<App />, document.getElementById('root'));
}