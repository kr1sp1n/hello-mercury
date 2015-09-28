'use strict';

var hg = require('mercury');
var h = hg.h;

function setTitle(state, data) {
  state.title.set(data.title);
}

function App() {
  var state = hg.struct({
    title: hg.value('Mercury'),
    handles: hg.value(null),
    _hotVersion: hg.value(0)
  });

  state.handles.set(hg.handles({
    change: setTitle
  }, state));

  return state;
}

module.exports = App;
