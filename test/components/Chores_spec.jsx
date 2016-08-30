import React from 'react';
import ReactDOM from 'react-dom';
import { renderIntoDocument, scryRenderedDOMComponentsWithTag, Simulate } from 'react-addons-test-utils';
import { expect } from 'chai';
import { List } from 'immutable';

import { Chores } from '../../src/components/Chores';

describe( 'Chores', () => {
    it( 'renders a list of chores', () => {
        const component = renderIntoDocument(<Chores chores={[
            'Make bed',
            'Clear table'
        ]}/>);

        const listItems = scryRenderedDOMComponentsWithTag( component, 'li' );

        expect( listItems.length ).to.equal( 2 );
        expect( listItems[ 0 ].textContent ).to.contain( 'Make bed' );
        expect( listItems[ 1 ].textContent ).to.contain( 'Clear table' );
    });

    it( 'invokes callback when the remove button is clicked', () => {
        let toRemove;
        const removed = chore => toRemove = chore;

        const component = renderIntoDocument( <Chores chores={[ 'Make bed' ]} removeChore={removed}/> );

        const button = scryRenderedDOMComponentsWithTag( component, 'button' );

        Simulate.click( button[ 0 ] );

        expect( toRemove ).to.equal( 0 );
    });

    it( 'invokes callback when the add chore is submitted', () => {
        let added = false;
        const add = () => added = true;

        const component = renderIntoDocument( <Chores chores={[]} addChore={add}/> );

        const form = scryRenderedDOMComponentsWithTag( component, 'form' );

        Simulate.submit( form[ 0 ] );

        expect( added ).to.equal( true );
    });

    it('renders as a pure component', () => {
        const container = document.createElement( 'div' );

        // set value and expect it to be right
        const chores = [ 'Make bed' ];
        let component = ReactDOM.render( <Chores chores={chores}/>, container );
        let firstListItem = scryRenderedDOMComponentsWithTag( component, 'li' )[ 0 ];
        expect( firstListItem.textContent ).to.contain( 'Make bed' );

        // change value but it shouldn't change cause the list is mutated and that's not pure
        chores[ 0 ] = 'Clear table';
        component = ReactDOM.render( <Chores chores={chores}/>, container );
        firstListItem = scryRenderedDOMComponentsWithTag( component, 'li' )[ 0 ];
        expect( firstListItem.textContent ).to.contain( 'Make bed' );
    });

    it( 'does update DOM when prop changes', () => {
        const container = document.createElement( 'div' );

        const chores = List.of( 'Make bed' );

        let component = ReactDOM.render( <Chores chores={chores}/>, container );

        let firstListItem = scryRenderedDOMComponentsWithTag( component, 'li' )[ 0 ];
        expect( firstListItem.textContent ).to.contain( 'Make bed' );

        const newChores = chores.set( 0, 'Clear table' );

        component = ReactDOM.render( <Chores chores={newChores}/>, container );

        firstListItem = scryRenderedDOMComponentsWithTag( component, 'li' )[ 0 ];
        expect( firstListItem.textContent ).to.contain( 'Clear table' );
    });
});
