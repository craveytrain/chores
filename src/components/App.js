import React from 'react';
// import Chores from './Chores';
import Day from './Day';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const App = () => (
    <div>
        <MuiThemeProvider>
            {/*}<Chores /> */}
            <Day />
        </MuiThemeProvider>
  </div>
);

export default App;
