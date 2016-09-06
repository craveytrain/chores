import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import { ChoresList } from '../../src/components/chores/List';

const chores = [
    {
        id: 'make-bed',
        name: 'Make bed',
        completed: false
    },
    {
        id: 'clear-table',
        name: 'Clear table',
        completed: false
    },
    {
        id: 'set-table',
        name: 'Set table',
        completed: false
    },
    {
        id: 'help-with-trash',
        name: 'Help with trash',
        completed: false
    }
];

describe( '<ChoresList/>', () => {
    it('should have props for onChoreClick and onRemoveChoreClick', () => {
        const wrapper = shallow(<ChoresList chores={chores} onChoreClick={()=>{}} onRemoveChoreClick={()=>{}} />);
        expect(wrapper.props().onChoreClick).to.be.defined;
        expect(wrapper.props().onRemoveChoreClick).to.be.defined;
    } );

    it( 'renders a list of chores', () => {
        const wrapper = shallow(<ChoresList chores={chores} onChoreClick={()=>{}} onRemoveChoreClick={()=>{}} />);

        expect( wrapper.find('li') ).to.have.length( 4 );
        expect( wrapper.find('li').first().text() ).to.contain( 'Make bed' );
    } );

    it( 'invokes callback when the remove button is clicked', () => {
        let toRemove;
        const removed = chore => toRemove = chore;

        const wrapper = shallow(<ChoresList chores={chores} onRemoveChoreClick={removed} onChoreClick={()=>{}} />);

        wrapper.find('button').first().simulate('click');

        expect( toRemove ).to.equal( 'make-bed' );
    } );

    it( 'invokes callback when the toggle is clicked', () => {
        let toToggle;
        const toggled = chore => toToggle = chore;

        const wrapper = shallow(<ChoresList chores={chores} onRemoveChoreClick={()=>{}} onChoreClick={toggled} />);

        wrapper.find( { type: 'checkbox' } ).first().simulate('click');

        expect( toToggle ).to.equal( 'make-bed' );
    } );
} );
