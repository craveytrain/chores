import React from 'react';
import { connect } from 'react-redux';
import ChoresList from './chores/List';
// import ChoreAdd from './chores/Add';

export const Day = props => (
    <div className='day'>
        <h1>{props.day.date.toDateString()}</h1>
        <ChoresList />
        {/*}<ChoreAdd /> */}
    </div>
);

const mapStateToProps = state => {
    let days = state.days;
    // TODO: hackiness
    let day = days[ days.length - 1 ];
    let chores = day.children[0].chores;

    return {
        day,
        chores
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

const DayContainer = connect( mapStateToProps )( Day );

export default DayContainer;
