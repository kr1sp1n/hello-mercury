'use strict';

// node-style includes (get's processed with browserify)
var document = require('global/document');
var hg = require('mercury');
var h = require('mercury').h;

// define internal state (analogous to a model in mvc)
function App() {
  return hg.state({
    value: "Hello Mercury!"
  });
}

// render virtual-dom from the internal state
App.render = function render(state){
  // create a virtual-dom `h1` element containing "Hello Mercury!"
  return h('h1', state.value);
}

// mount the virtual-dom on the html document body
hg.app(document.body, App(), App.render);
