const chore = ( state, action ) => {
    switch ( action.type ) {
        case 'ADD_CHORE':
            return {
                id: action.name.toLowerCase().split(' ').join('-'),
                name: action.name,
                completed: false
            };

        case 'TOGGLE_CHORE':
            // if this ain't the right one, return
            if ( state.id  !== action.id ) return state;

            return Object.assign({}, state, {
                completed: !state.completed
            } );

    return state;
    }
};

const chores = ( state = [], action ) => {
    switch ( action.type ) {
        case 'SET_CHORES':
            return [
                ...action.chores
            ];

        case 'ADD_CHORE':
            return [
                ...state,
                chore( undefined, action )
            ];

        case 'TOGGLE_CHORE':
            return state.map( c => chore( c, action ) );

        case 'REMOVE_CHORE':
            return state.filter( c => c.id !== action.id )
    }

    // otherwise, just return the state
    return state;
}

export default chores;
