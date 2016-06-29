import {
    List,
    Map,
    fromJS
} from 'immutable';
import {
    expect
} from 'chai';

import reducer from '../src/reducer';

describe( 'reducer', () => {

    it( 'handles SET_STATE', () => {
        const initialState = Map();

        const action = {
            type: 'SET_STATE',
            state: Map( {
                chores: List.of(
                    Map( {
                        id: 'makeBed',
                        name: 'Make bed'
                    } )
                )
            } )
        };

        const nextState = reducer( initialState, action );

        expect( nextState )
            .to.equal( fromJS( {
                chores: [
                    {
                        id: 'makeBed',
                        name: 'Make bed'
					}
				]
            } ) );
    } );

    it( 'handles SET_STATE with plain JS payload', () => {
        const initialState = Map();
        const action = {
            type: 'SET_STATE',
            state: {
                chores: [
                    {
                        id: 'makeBed',
                        name: 'Make bed'
					}
				]
            }
        };
        const nextState = reducer( initialState, action );

        expect( nextState )
            .to.equal( fromJS( {
                chores: [
                    {
                        id: 'makeBed',
                        name: 'Make bed'
		  			}
	  			]
            } ) );
    } );

    it( 'handles SET_STATE without initial state', () => {
        const action = {
            type: 'SET_STATE',
            state: {
                chores: [
                    {
                        id: 'makeBed',
                        name: 'Make bed'
					}
				]
            }
        };

        const nextState = reducer( undefined, action );

        expect( nextState )
            .to.equal( fromJS( {
                chores: [
                    {
                        id: 'makeBed',
                        name: 'Make bed'
		  			}
	  			]
            } ) );
    } );
} );
