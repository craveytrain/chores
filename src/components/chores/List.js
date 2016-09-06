import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { toggleChore, removeChore } from '../../actions/chores';

export const ChoresList = ( { chores, onChoreClick, onRemoveChoreClick } ) => (
    <ul>
        { chores.map( (chore, index) => <li key={ chore.id }>
            { chore.name }
            <input type="checkbox" onClick={ () => onChoreClick( chore.id ) } />
            <button onClick={ () => onRemoveChoreClick( chore.id ) }>Remove</button>
        </li>) }
    </ul>
);

ChoresList.propTypes = {
  chores: PropTypes.arrayOf( PropTypes.shape( {
    id: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
  } ).isRequired ).isRequired,
  onChoreClick: PropTypes.func.isRequired,
  onRemoveChoreClick: PropTypes.func.isRequired
};


const mapStateToProps = state => {
    return {
        chores: state.chores || []
    };
}

const mapDispatchToProps = dispatch => {
  return {
    onChoreClick: id  => {
      dispatch( toggleChore( id ) );
  },
    onRemoveChoreClick: id  => {
      dispatch( removeChore( id ) );
    }
  };
};

const ChoresListContainer = connect( mapStateToProps, mapDispatchToProps )( ChoresList );

export default ChoresListContainer;
