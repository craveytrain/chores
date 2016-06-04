import React from 'react';
import ReactDOM from 'react-dom';
import Chores from './components/Chores';

const chores = [
	{
		id: 'makeBed',
		name: 'Make bed'
	},
	{
		id: 'clearTable',
		name: 'Clear table'
	}
];

ReactDOM.render(
  <Chores chores={chores} />,
  document.getElementById('app')
);
