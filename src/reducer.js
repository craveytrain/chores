import { Map } from 'immutable';
import {
    setChores,
    addChore,
    removeChore
} from './stores/chores';

export default function ( state = Map(), action ) {
    switch ( action.type ) {
        case 'SET_STATE':
            return state.merge( action.state );

        case 'SET_CHORES':
            return state.update( 'chores', choreState => setChores( action.chores ) );

        case 'ADD_CHORE':
            return state.update( 'chores', choreState => addChore( choreState, action.name ) );

        case 'REMOVE_CHORE':
            return state.update( 'chores', choreState => removeChore( choreState, action.index ) );
    }

    return state;
}
