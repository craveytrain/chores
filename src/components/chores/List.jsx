import React from 'react';

export default React.createClass({
    getChores: function() {
        return this.props.chores || [];
    },
    render: function() {
        return <ul>
            {this.getChores().map(chore => <li key={chore.id}>
                {chore.name}
                <button onClick={() => this.props.delete(chore)}>Delete</button>
            </li>)}
        </ul>
    }
});
