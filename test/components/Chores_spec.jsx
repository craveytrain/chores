import React from 'react';
import ReactDOM from 'react-dom';
import {renderIntoDocument, scryRenderedDOMComponentsWithTag, Simulate} from 'react-addons-test-utils';
import {expect} from 'chai';
import {List} from 'immutable';

import Chores from '../../src/components/Chores';

describe('Chores', () => {
    it('renders a list of chores', () => {
        const component = renderIntoDocument(<Chores chores={[
            {
                id: 'makeBed',
                name: 'Make bed'
            }, {
                id: 'clearTable',
                name: 'Clear table'
            }
        ]}/>);

        const listItems = scryRenderedDOMComponentsWithTag(component, 'li');

        expect(listItems.length).to.equal(2);
        expect(listItems[0].textContent).to.contain('Make bed');
        expect(listItems[1].textContent).to.contain('Clear table');
    });

    it('invokes callback when the delete button is clicked', () => {
        let toDelete;
        const fixtureChore = {
            id: 'makeBed',
            name: 'Make bed'
        };

        const deleted = chore => toDelete = chore;

        const component = renderIntoDocument(<Chores chores={[fixtureChore]} delete={deleted}/>);

        const button = scryRenderedDOMComponentsWithTag(component, 'button');

        Simulate.click(button[0]);

        expect(toDelete).to.equal(fixtureChore);
    });

    xit('invokes callback when the add chore is submitted', () => {
        let toAdd;
        const fixtureChore = 'New Chore';

        const added = chore => toAdd = chore;

        const component = renderIntoDocument(<Chores chores={[]} add={added}/>);

        const form = scryRenderedDOMComponentsWithTag(component, 'form');
        // const input = findRenderedDOMComponentWithTag(form, 'input');

        Simulate.submit(form[0]);

        expect(toAdd).to.equal(fixtureChore);
    });

    it('renders as a pure component', () => {
        const container = document.createElement('div');

        const chores = [
            {
                id: 'makeBed',
                name: 'Make bed'
            }
        ];
        let component = ReactDOM.render(<Chores chores={chores}/>, container);

        let firstListItem = scryRenderedDOMComponentsWithTag(component, 'li')[0];
        expect(firstListItem.textContent).to.contain('Make bed');

        chores[0] = {
            id: 'clearTable',
            name: 'Clear table'
        };
        component = ReactDOM.render(<Chores chores={chores}/>, container);

        firstListItem = scryRenderedDOMComponentsWithTag(component, 'li')[0];
        expect(firstListItem.textContent).to.contain('Make bed');
    });

    it('does update DOM when prop changes', () => {
        const container = document.createElement('div');

        const chores = List.of({
            id: 'makeBed',
            name: 'Make bed'
        });
        let component = ReactDOM.render(<Chores chores={chores}/>, container);

        let firstListItem = scryRenderedDOMComponentsWithTag(component, 'li')[0];
        expect(firstListItem.textContent).to.contain('Make bed');

        const newChores = chores.set(0, {
            id: 'clearTable',
            name: 'Clear table'
        })
        component = ReactDOM.render(<Chores chores={newChores}/>, container);

        firstListItem = scryRenderedDOMComponentsWithTag(component, 'li')[0];
        expect(firstListItem.textContent).to.contain('Clear table');
    });
});
