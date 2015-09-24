'use strict';

// node-style includes (get's processed with browserify)
var document = require('global/document');
var hg = require('mercury');
var h = require('mercury').h;

// define internal state (analogous to a model in mvc)
function App() {
  var state = hg.struct({
    title: hg.value('Mercury'),
    handles: hg.value(null)
  });

  state.handles.set(hg.handles({
    change: setTitle
  }, state));

  return state;
}

function setTitle(state, data) {
  state.title.set(data.title);
}

function inputBox(value, sink) {
  return h('input', {
    value: value,
    name: 'title',
    type: 'text',
    'ev-event': hg.changeEvent(sink)
  });
}

// render virtual-dom from the internal state
App.render = function render(state){
  return h('div', [
    h('h1', 'Hello ' + state.title + '!'),
    h('p', [
        'Change it here: ',
        inputBox(state.title, state.handles.change)
    ])
  ]);
}

// mount the virtual-dom on the html document body
hg.app(document.body, App(), App.render);
