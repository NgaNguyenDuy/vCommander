var assert = require('assert');

describe('Array test', function() {
    describe('indexOf()', function() {
        it('should return -1 when the value is not present', function(done) {
            assert.equal(-1, [1, 2, 3].indexOf(5));
            assert.equal(-1, [1, 2, 3].indexOf(4));
            assert.equal(-1, [1, 2, 3].indexOf(6));
            done();
        });
    });
});
