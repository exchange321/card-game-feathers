/**
 * Created by Wayuki on 26-Feb-17.
 */
import React, { PropTypes } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

const App = () => (
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div>This is App</div>
    </MuiThemeProvider>
);

App.propTypes = {};

export default App;
