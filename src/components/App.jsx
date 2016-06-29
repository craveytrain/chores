import React from 'react';
import {List} from 'immutable';

const chores = List.of(
	{
		id: 'makeBed',
		name: 'Make bed'
	},
	{
		id: 'clearTable',
		name: 'Clear table'
	}
);

export default React.createClass({
  render: function() {
    return React.cloneElement(this.props.children, {chores: chores});
  }
});
