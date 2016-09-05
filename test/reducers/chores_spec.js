import { expect } from 'chai';
import deepFreeze from 'deep-freeze';

import reducer from '../../src/reducers/chores';
import actions from '../../src/actions';


describe( 'chores reducer', () => {
    it( 'handles SET_CHORES', () => {
        const nextState = reducer( undefined, actions.setChores( [  'Make bed' ] ) );

        expect( nextState ).to.deep.equal( [ 'Make bed' ] );
    } );

    it( 'handles ADD_CHORE', () => {
        const initialState = [ 'Clear table' ];
        deepFreeze(initialState);

        const nextState = reducer( initialState, actions.addChore( 'Make bed' ) );

        expect( nextState ).to.deep.equal( [ 'Clear table', 'Make bed' ] );

    } );

    it( 'handles REMOVE_CHORE', () => {
        const initialState = [ 'Make bed', 'Clear table' ];
        deepFreeze(initialState);

        const nextState = reducer( initialState, actions.removeChore( 0 ) );

        expect( nextState ).to.deep.equal( [ 'Clear table' ] );
    } );

    it( 'can be used with reduce', () => {
        const actionQueue = [
            {
                type: 'SET_CHORES',
                chores: [ 'Make bed' ]
            },
            {
                type: 'ADD_CHORE',
                name: 'Clean table'
            },
            {
                type: 'REMOVE_CHORE',
                index: 0
            }
      ];
        const finalState = actionQueue.reduce( reducer, [] );

        expect( finalState ).to.deep.equal( [ 'Clean table' ] );
    } );
} );
