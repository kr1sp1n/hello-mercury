'use strict';

var hg = require('mercury');
var h = hg.h;

function inputBox(value, sink) {
  return h('input', {
    value: value,
    name: 'title',
    type: 'text',
    'ev-event': hg.changeEvent(sink)
  });
}

module.exports = function render(state) {
  return h('div', [
    h('h1', 'Hello ' + state.title + '!'),
    h('p', [
        'Change it here: ',
        inputBox(state.title, state.handles.change)
    ])
  ]);
};
