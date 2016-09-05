import React from 'react';
import { render } from 'react-dom';
import { createStore, bindActionCreators } from 'redux';
import reducer from './reducers';
import { Provider, connect } from 'react-redux';
// import io from 'socket.io-client';
import App from './components/App';

// const store = createStore( reducer );

const initialState = {
    chores: [
        "Make bed",
        "Clear table",
        "Set table",
        "Help with trash"
    ]
};

const store = createStore( reducer, initialState, window.devToolsExtension && window.devToolsExtension() );

// const socket = io(`${location.protocol}//${location.hostname}:8090`);
// socket.on( 'state', state => store.dispatch( { type: 'SET_STATE', state } ) );

// const routes = <Route component={App}>
//     <Route path="/" component={ChoresContainer}/>
// </Route>;

// import {ChoresContainer} from './Chores';



render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
