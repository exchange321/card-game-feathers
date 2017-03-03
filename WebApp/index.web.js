/**
 * Created by Wayuki on 26-Feb-17.
 */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import InjectTapEventPlugin from 'react-tap-event-plugin';

import './src/index.css';

import Container from './src/index.jsx';

window.jQuery = window.$ = require('jquery'); // eslint-disable-line no-multi-assign
window.Tether = require('tether');
require('bootstrap');

InjectTapEventPlugin();
render(React.createElement(Container), document.querySelector('#app'));
