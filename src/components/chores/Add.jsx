import React from 'react';

export default React.createClass({
    render: function() {
        return <form onSubmit={() => this.props.add()}><input type="text" value="" /></form>
    }
});
