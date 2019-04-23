const assert = require('assert');
let LIB = require('../build/lib').LIB;
let LIBM = require('../build/lib-min').LIB;
let Lib = new LIB();
let Libm = new LIBM();

describe("Lib.reverse('Hello!')", function() {
    it("returns: !olleH (1)", function() {
        assert.equal(Lib.reverse('Hello!'), '!olleH');
    });
});

describe("Libm.reverse('Hello!')", function() {
    it("returns: !olleH (1)", function() {
        assert.equal(Libm.reverse('Hello!'), '!olleH');
    });
});