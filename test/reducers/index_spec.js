import { expect } from 'chai';
import deepFreeze from 'deep-freeze';

import reducer from '../../src/reducers';
import actions from '../../src/actions';


describe( 'reducer', () => {
    // disabled for now, not sure this is still viable
    xit( 'handles SET_STATE', () => {
        const initialState = { stuff: 'hi' };
        deepFreeze(initialState);

        const nextState = reducer( initialState, actions.setState( {
            chores: [ 'Make bed' ]
        } ) );

        expect( nextState ).to.deep.equal( {
            stuff: 'hi',
            chores: [ 'Make bed' ]
        } );
    } );

    // disabled for now, not sure this is still viable
    xit( 'handles SET_STATE without initial state', () => {
        const nextState = reducer( undefined, actions.setState( {
            chores: [ 'Make bed' ]
        } ) );

        expect( nextState ).to.deep.equal( {
            chores: [ 'Make bed' ]
        } );
    } );

    it( 'assigns chores to correct branch', () => {
        it( 'handles SET_CHORES', () => {
            const initialState = { stuff: 'hi' };
            deepFreeze(initialState);

            const nextState = reducer( initialState, actions.setChores( [ 'Make bed' ] ) );

            expect( nextState ).to.deep.equal( {
                stuff: 'hi',
                chores: [ 'Make bed' ]
            } );
        } );
    } );
} );
