import { Map, fromJS } from 'immutable';
import { expect } from 'chai';

import {
    setChores,
    addChore,
    removeChore
} from '../../src/stores/chores';

describe( 'chores logic', () => {

    describe( 'setChores', () => {
        it( 'sets the chores to the state', () => {
            const nextState = setChores( [ 'Make bed' ] );
            expect( nextState ).to.equal( fromJS( [ 'Make bed' ] ) );
        } );
    } );

    describe( 'addChore', () => {
        it( 'adds a chore to the state', () => {
            const initialState = setChores( [ 'Make bed' ] );

            const nextState = addChore( initialState, 'Clear table' );

            expect( nextState ).to.equal( fromJS( [ 'Make bed', 'Clear table' ] ) );
        } );
    } );

    describe( 'removeChore', () => {
        it( 'removes a chore from the state', () => {
            const initialState = setChores( [ 'Make bed', 'Clear table' ] );

            const nextState = removeChore( initialState, 1 );

            expect( nextState )
                .to.equal( fromJS( [ 'Make bed' ] ) );
        } );
    } );
} );
