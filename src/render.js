'use strict';

var hg = require('mercury');
var h = hg.h;

function inputBox(value, channel) {
  return h('input', {
    value: value,
    name: 'title',
    type: 'text',
    'ev-event': hg.sendChange(channel)
  });``
}

module.exports = function render(state) {
  return h('div', [
    h('h1', 'Hello ' + state.title + '!'),
    h('p', [
        'Change it here: ',
        inputBox(state.title, state.channels.change)
    ])
  ]);
};
