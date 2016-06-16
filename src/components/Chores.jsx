import React from 'react';
import List from './chores/List';
import Add from './chores/Add';

export default React.createClass({
    render: function() {
        return <div className='chores'>
            <List {...this.props} />
            <Add />
        </div>;
    }
});
