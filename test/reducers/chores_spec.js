import { expect } from 'chai';
import deepFreeze from 'deep-freeze';

import reducer from '../../src/reducers/chores';
import { setChores, addChore, removeChore, toggleChore } from '../../src/actions/chores';

describe( 'chores reducer', () => {
    it( 'handles SET_CHORES', () => {
        const nextState = reducer( undefined, setChores( [ {
            name: 'Clear table',
            id: 'clear-table',
            completed: false
        } ] ) );

        expect( nextState ).to.deep.equal( [ {
            name: 'Clear table',
            id: 'clear-table',
            completed: false
        } ] );
    } );

    it( 'handles ADD_CHORE', () => {
        const initialState = [ {
            name: 'Clear table',
            id: 'clear-table',
            completed: false
        } ];
        deepFreeze(initialState);

        const nextState = reducer( initialState, addChore( 'Make bed' ) );

        expect( nextState ).to.deep.equal( [
            {
                name: 'Clear table',
                id: 'clear-table',
                completed: false
            },
            {
                name: 'Make bed',
                id: 'make-bed',
                completed: false
            }
        ] );

    } );

    it( 'handles REMOVE_CHORE', () => {
        const initialState = [
            {
                name: 'Clear table',
                id: 'clear-table',
                completed: false
            },
            {
                name: 'Make bed',
                id: 'make-bed',
                completed: false
            }
        ];
        deepFreeze(initialState);

        const nextState = reducer( initialState, removeChore( 'make-bed' ) );

        expect( nextState ).to.deep.equal( [ {
            name: 'Clear table',
            id: 'clear-table',
            completed: false
        } ] );
    } );

    it( 'handles TOGGLE_CHORE', () => {
        const initialState = [ {
            name: 'Clear table',
            id: 'clear-table',
            completed: false
        } ];
        deepFreeze(initialState);

        const nextState = reducer( initialState, toggleChore( 'clear-table' ) );

        expect( nextState ).to.deep.equal( [
            {
                name: 'Clear table',
                id: 'clear-table',
                completed: true
            }
        ] );
    } );

    it( 'can be used with reduce', () => {
        const actionQueue = [
            setChores( [ {
                name: 'Make bed',
                id: 'make-bed',
                completed: false
            } ] ),
            addChore( 'Clear table' ),
            toggleChore( 'clear-table' ),
            removeChore( 'make-bed' )
      ];
        const finalState = actionQueue.reduce( reducer, [] );

        expect( finalState ).to.deep.equal( [ {
            name: 'Clear table',
            id: 'clear-table',
            completed: true
        } ] );
    } );
} );
