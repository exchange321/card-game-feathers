/**
 * Created by Wayuki on 26-Feb-17.
 */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';

import './src/index.css';

import AppContainer from './src/index.jsx';

render(React.createElement(AppContainer), document.querySelector('#app'));
