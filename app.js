var hg = require('mercury');
var h = require('mercury').h;

function Foo(initialState) {
    return hg.state({
        bars: hg.array(initialState.bars, createBar),
        channels: {
            addBar: Foo.addBar
        }
    });

    function createBar(x) {
        return hg.struct({
            id: hg.value(x.id),
            bar: hg.value(x.bar)
        })
    }
}

Foo.addBar = function addBar(state) {
    state.bars.push({
        id: 2,
        bar: Math.round(Math.random() * 1000)
    });
};

Foo.render = function render(state) {
    return h('div', state.bars.map(renderBar))

    function renderBar(bar) {
        return h('div', {
            'attributes': {
                'data-foo-id': bar.id
            },
            'style': {
                'margin': '10px',
                'background': '#ececec',
                'padding': '5px',
                'cursor': 'pointer',
                'display': 'inline-block'
            },
            'ev-click': hg.send(state.channels.addBar)
        });
    }
};

function main() {
    hg.app(document.body, Foo({
        bars: [{ id: 2, bar: 135 }]
    }), Foo.render);
}

main();
