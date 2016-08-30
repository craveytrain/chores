import { List, Map, fromJS } from 'immutable';
import { expect } from 'chai';

import reducer from '../src/reducer';
import actions from '../src/actions';


describe( 'reducer', () => {
    describe( 'state reducer', () => {
        it( 'handles SET_STATE with plain JS payload', () => {
            const initialState = Map();
            const nextState = reducer( initialState, actions.setState( {
                chores: [ 'Make bed' ]
            } ) );

            expect( nextState )
                .to.equal( fromJS( {
                    chores: [ 'Make bed' ]
                } ) );
        } );

        it( 'handles SET_STATE without initial state', () => {
            const nextState = reducer( undefined, actions.setState( {
                chores: [ 'Make bed' ]
            } ) );

            expect( nextState )
                .to.equal( fromJS( {
                    chores: [ 'Make bed' ]
                } ) );
        } );
    } );

    describe( 'chores reducer', () => {
        it( 'has an initial state', () => {
            const nextState = reducer( undefined, actions.setChores( [ 'Make bed' ] ) );

            expect( nextState ).to.equal( fromJS( {
                chores: [ 'Make bed' ]
            } ) );
        } );

        it( 'handles SET_CHORES', () => {
            const nextState = reducer( undefined, actions.setChores( [  'Make bed' ] ) );

            expect( nextState ).to.equal( fromJS( {
                chores: [ 'Make bed' ]
            } ) );
        } );

        it( 'handles ADD_CHORE', () => {
            const nextState = reducer( undefined, actions.addChore( 'Make bed' ) );

            expect( nextState ).to.equal( fromJS( {
                chores: [ 'Make bed' ]
            } ) );

        } );

        it( 'handles REMOVE_CHORE', () => {
            const initialState = fromJS( {
                chores: [ 'Make bed', 'Clear table' ]
            } );

            const nextState = reducer( initialState, actions.removeChore( 0 ) );

            expect( nextState ).to.equal( fromJS( {
                chores: [ 'Clear table' ]
            } ) );
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
            const finalState = actionQueue.reduce( reducer, Map() );

            expect( finalState ).to.equal( fromJS( {
                chores: [ 'Clean table' ]
            } ) );
        } );

    } );

} );
