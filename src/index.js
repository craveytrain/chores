import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import reducer from './reducers';
import { Provider } from 'react-redux';
// import io from 'socket.io-client';
import App from './components/App';

// const store = createStore( reducer );

const initialState = {
    chores: [
        {
            id: 'make-bed',
            name: 'Make bed',
            completed: false
        },
        {
            id: 'clear-table',
            name: 'Clear table',
            completed: false
        },
        {
            id: 'set-table',
            name: 'Set table',
            completed: false
        },
        {
            id: 'help-with-trash',
            name: 'Help with trash',
            completed: false
        }
    ],
    days: [
        {
            date: new Date(),
            children: [
                {
                    name: 'Jackson',
                    chores: [
                        {
                            id: 'make-bed',
                            name: 'Make bed',
                            completed: false
                        },
                        {
                            id: 'clear-table',
                            name: 'Clear table',
                            completed: false
                        },
                        {
                            id: 'set-table',
                            name: 'Set table',
                            completed: false
                        },
                        {
                            id: 'help-with-trash',
                            name: 'Help with trash',
                            completed: false
                        }
                    ]
                }
            ]
        }
    ]
};

const store = createStore( reducer, initialState, window.devToolsExtension && window.devToolsExtension() );

// const socket = io(`${location.protocol}//${location.hostname}:8090`);
// socket.on( 'state', state => store.dispatch( { type: 'SET_STATE', state } ) );

// const routes = <Route component={App}>
//     <Route path="/" component={ChoresContainer}/>
// </Route>;

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
