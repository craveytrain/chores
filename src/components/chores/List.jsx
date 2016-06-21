import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
    mixins: [PureRenderMixin],
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
