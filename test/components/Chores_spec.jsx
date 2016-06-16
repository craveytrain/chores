import React from 'react';
import ReactDOM from 'react-dom';
import {renderIntoDocument, scryRenderedDOMComponentsWithTag, Simulate} from 'react-addons-test-utils';
import {expect} from 'chai';

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
});
