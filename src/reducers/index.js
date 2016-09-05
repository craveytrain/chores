import { combineReducers } from 'redux';
import chores from './chores';

// export default ( state = {}, action ) => {
//     switch ( action.type ) {
//         case 'SET_STATE':
//             return Object.assign( {}, state, action.state );
//
//         case 'SET_CHORES':
//             return Object.assign( {}, state, {
//                 chores: setChores( action.chores )
//             } );
//
//         case 'ADD_CHORE':
//             return state.update( 'chores', choreState => addChore( choreState, action.name ) );
//
//         case 'REMOVE_CHORE':
//             return state.update( 'chores', choreState => removeChore( choreState, action.index ) );
//     }
//
//     return state;
// }


const comboReducer = combineReducers({
  chores
});

export default comboReducer;
