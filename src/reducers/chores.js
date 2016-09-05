const chores = ( state = [], action ) => {
    switch ( action.type ) {
        case 'SET_CHORES':
            return [
                ...action.chores
            ];

        case 'ADD_CHORE':
            return [
                ...state,
                action.name
            ];

        case 'REMOVE_CHORE':
            return [
            // In the array grab the state from beginning to index of one to delete
             ...state.slice(0, action.index),
             // Grab state from the one after one we want to delete
             ...state.slice(action.index + 1)
            ];
    }

    // otherwise, just return the state
    return state;
}

export default chores;
