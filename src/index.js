import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {Provider} from 'react-redux'
import appReducers from './reducers/index'

const redux= require('redux')

const store = redux.createStore(
        appReducers,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
        <Provider store={store}>
        <App />
        </Provider>, 
        document.getElementById('root'));


serviceWorker.unregister();
