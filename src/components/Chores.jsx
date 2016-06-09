import React from 'react';

export default React.createClass({
    getChores: function() {
        return this.props.chores || [];
    },
    render: function() {
        return <ul className="chores">
			{this.getChores().map(chore =>
				<li key={chore.id}>
					{chore.name}
					<button onClick={() => this.props}>Delete</button>
				</li>
			)}
        </ul>
		{<p><input type="text" class="addChore" /></p>};
    }
});
