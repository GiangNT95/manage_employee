import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './i18n';

const loadingMarkup = (
    <div className="py-4 text-center">
        <h3>Loading..</h3>
    </div>
)
ReactDOM.render(
    <Suspense fallback={loadingMarkup}>
        <App />
    </Suspense>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
