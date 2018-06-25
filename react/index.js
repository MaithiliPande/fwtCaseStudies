import React from 'react';
import ReactDOM from 'react-dom';
import {Provider } from 'react-redux';
import { createStore } from 'redux';

import './index.css';
import App from './App';
import reducer from './app-reducer';
import ConnetedApp from './app-connector';
import registerServiceWorker from './registerServiceWorker';

const initialState = {
    todo : {
        name : '',
        date : new Date()
    },
    todoList : []
}

const store = createStore(reducer,initialState);

class MainApp extends React.Component{
    render() {
        return(
            <Provider store = {store}>
                <ConnetedApp/>
            </Provider>
        )
    }
}

ReactDOM.render(<MainApp />, document.getElementById('root'));
registerServiceWorker();
