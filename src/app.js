'use strict';

var hg = require('mercury');
var h = hg.h;

function App(initialState) {
  return hg.state({
    title: hg.value('Mercury'),
    channels: {
      change: setTitle
    },
    _hotVersion: hg.value(0)
  });
}

function setTitle(state, data) {
  state.title.set(data.title);
};

module.exports = App;
