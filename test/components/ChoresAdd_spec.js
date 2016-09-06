import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';

import { ChoreAdd } from '../../src/components/chores/Add';

describe( '<ChoreAdd/>', () => {
    it('should have props for dispatch', () => {
        const wrapper = shallow(<ChoreAdd dispatch={()=>{}}/>);

        expect(wrapper.props().dispatch).to.be.defined;
    } );

    it( 'renders a form to add a chore', () => {
        const wrapper = shallow(<ChoreAdd dispatch={()=>{}}/>);

        expect( wrapper.find( '#name' ) ).to.have.length( 1 );
        expect( wrapper.find( { type: 'submit' } ) ).to.have.length( 1 );
    } );

    it( 'invokes callback when the add button is clicked', () => {
        let added = false;
        const add = () => added = true;

        const wrapper = mount(<ChoreAdd dispatch={add}/>);

        wrapper.simulate('submit');

        expect( added ).to.equal( true );
    } );
} );
