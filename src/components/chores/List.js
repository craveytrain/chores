import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { List, ListItem } from 'material-ui/List';
import ToggleStar from 'material-ui/svg-icons/toggle/star';
import ToggleStarBorder from 'material-ui/svg-icons/toggle/star-border';
import Checkbox from 'material-ui/Checkbox';
// import FlatButton from 'material-ui/FlatButton';
// import { toggleChore, removeChore } from '../../actions/chores';
import { toggleChore } from '../../actions/chores';

export const ChoresList = ( { chores, onChoreClick, onRemoveChoreClick } ) => (
    <List>
        { chores.map( chore =>
                <ListItem key={chore.id}>
                    <Checkbox
      label={chore.name}
      checkedIcon={<ToggleStar />}
      uncheckedIcon={<ToggleStarBorder />}
      labelPosition="left"
       onClick={ () => onChoreClick( chore.id ) }
    /></ListItem>
        ) }
    </List>
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
