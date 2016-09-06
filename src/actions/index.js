export function setState ( state ) {
	return {
		type: 'SET_STATE',
		state
	}
}

export function setChores ( chores ) {
	return {
		type: 'SET_CHORES',
		chores
	}
}

export function addChore ( name ) {
	return {
		type: 'ADD_CHORE',
		name
	}
}

export function removeChore ( id ) {
	return {
		type: 'REMOVE_CHORE',
		id
	}
}

export function toggleChore ( id ) {
	return {
		type: 'TOGGLE_CHORE',
		id
	}
}
