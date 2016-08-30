const actions = {
	setState: state => {
		return {
			type: 'SET_STATE',
			state
		}
	},
	setChores: chores => {
		return {
			type: 'SET_CHORES',
			chores
		}
	},
	addChore: name => {
		return {
			type: 'ADD_CHORE',
			name
		}
	},

	removeChore: index => {
		return {
			type: 'REMOVE_CHORE',
			index
		}
	}
};

export default actions;
