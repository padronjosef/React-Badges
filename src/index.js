import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.css"

import './global.css'
import BadgeNew from './pages/BadgeNew.js';
import Badges from './pages/Badges.js';

const container = document.getElementById('app')

ReactDOM.render(  <Badges />, container );