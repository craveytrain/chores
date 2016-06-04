import React from 'react';
import ReactDOM from 'react-dom';
import { renderIntoDocument, scryRenderedDOMComponentsWithTag } from 'react-addons-test-utils';
import {expect} from 'chai';

import Chores from '../../src/components/Chores';

describe('Chores', () => {
    it('renders a list of chores', () => {

        const component = renderIntoDocument(
			<Chores chores={[
				{
					id: 'makeBed',
					name: 'Make bed'
				},
				{
					id: 'clearTable',
					name: 'Clear table'
				}
			]} />
		);

		const listItems = scryRenderedDOMComponentsWithTag(component, 'li');

		expect(listItems.length).to.equal(2);
		expect(listItems[0].textContent).to.equal('Make bed');
		expect(listItems[1].textContent).to.equal('Clear table');

    });

});
