import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { addChore } from '../../actions/chores';

export const ChoreAdd = ( { dispatch } ) => {
    return (
            <form onSubmit={ e => {
                e.preventDefault();
                let form = e.target;

                // Trigger action
                dispatch( addChore( form.name.value ) );

                // Reset form
                form.reset();
            }}>
                <input id="name" type="text" placeholder="Do the things" />
                <button type="submit">Add</button>
            </form>
    );
}

ChoreAdd.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const ChoreAddContainer = connect()( ChoreAdd );

export default ChoreAddContainer;
