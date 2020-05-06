import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app';
import '../semantic/dist/semantic.min.css';
import './index.css';
import '../semantic/dist/semantic.min';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);