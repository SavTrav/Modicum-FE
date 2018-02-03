import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Modicum from './Modicum';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Modicum />, document.getElementById('root'));
registerServiceWorker();
