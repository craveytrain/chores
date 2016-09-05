import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../actions';
import List from './chores/List';
import Add from './chores/Add';

export const Chores = React.createClass({
    mixins: [PureRenderMixin],
    render: function() {
        return <div className='chores'>
            <List {...this.props} />
            <Add  {...this.props} />
        </div>;
    }
});

function mapStateToProps(state) {
    return {
        chores: state.chores
    };
}

export const ChoresContainer = connect( mapStateToProps, actions )( Chores );
