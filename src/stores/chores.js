import { List, fromJS } from 'immutable';

export function setChores( chores ) {
    if ( !chores ) return List();
    return fromJS( chores );
}

export function addChore( choreState = List(), chore ) {
	return choreState.push( chore );
}

export function removeChore( choreState, index ) {
	return choreState.remove( index );
}
