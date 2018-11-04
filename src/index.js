import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/layout.css';

import registerServiceWorker from './js/registerServiceWorker';

var layout_config = require('./modules.config.json')

layout_config.header_left.forEach(function(module_name){
    var Module = require('./modules/' + module_name).default
    ReactDOM.render(<Module />, document.getElementById('header-left'))
})

layout_config.header_center.forEach(function(module_name){
    var Module = require('./modules/' + module_name).default
    ReactDOM.render(<Module />, document.getElementById('header-center'))
})

layout_config.header_right.forEach(function(module_name){
    var Module = require('./modules/' + module_name).default
    ReactDOM.render(<Module />, document.getElementById('header-right'))
})

layout_config.main_left.forEach(function(module_name){
    var Module = require('./modules/' + module_name).default
    ReactDOM.render(<Module />, document.getElementById('main-left'))
})

layout_config.main_center.forEach(function(module_name){
    var Module = require('./modules/' + module_name).default
    ReactDOM.render(<Module />, document.getElementById('main-center'))
})

layout_config.main_right.forEach(function(module_name){
    var Module = require('./modules/' + module_name).default
    ReactDOM.render(<Module />, document.getElementById('main-right'))
})

layout_config.footer_left.forEach(function(module_name){
    var Module = require('./modules/' + module_name).default
    ReactDOM.render(<Module />, document.getElementById('footer-left'))
})

layout_config.footer_center.forEach(function(module_name){
    var Module = require('./modules/' + module_name).default
    ReactDOM.render(<Module />, document.getElementById('footer-center'))
})

layout_config.footer_right.forEach(function(module_name){
    var Module = require('./modules/' + module_name).default
    ReactDOM.render(<Module />, document.getElementById('footer-right'))
})


registerServiceWorker()
