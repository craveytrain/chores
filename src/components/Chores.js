import React from 'react';
import ChoresList from './chores/List';
import ChoreAdd from './chores/Add';

const Chores = () => (
    <div className='chores'>
        <h1>Chores</h1>
        <ChoresList />
        <ChoreAdd />
    </div>
);

export default Chores;
