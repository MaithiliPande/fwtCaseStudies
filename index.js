import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './index.css';
import ConnetedApp from './app-connector';
import reducer from './app-reducer';
import registerServiceWorker from './registerServiceWorker';

const initialState = {
    count: 0
};

const store = createStore(reducer, initialState);

class MainApp extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <ConnetedApp />
            </Provider>
        )
    }
}

ReactDOM.render(<MainApp />, document.getElementById('root'));

registerServiceWorker();
