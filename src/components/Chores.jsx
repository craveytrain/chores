import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import List from './chores/List';
import Add from './chores/Add';

export default React.createClass({
    mixins: [PureRenderMixin],
    render: function() {
        return <div className='chores'>
            <List {...this.props} />
            <Add />
        </div>;
    }
});
