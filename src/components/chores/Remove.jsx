import React from 'react';
import { render } from 'react-dom';

export default class RemoveChore extends React.Component {
    render() {
        return (
			<button onClick={() => this.props.removeChore( this.props.index )}>Remove</button>
		)
	}
}
