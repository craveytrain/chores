import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
    mixins: [PureRenderMixin],
    handleSubmit(e) {
        e.preventDefault();

        let refs = this.refs;

        // Trigger action
        this.props.addChore( refs.name.value );

        // Reset form
        refs.addChore.reset();
    },
    render: function() {
        return (
            <form ref="addChore" onSubmit={this.handleSubmit}>
				<input id="name" type="text" ref="name" placeholder="Do the things" />
				<button type="submit">Add</button>
			</form>
        )
    }
});
