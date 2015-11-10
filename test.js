var commonElements = require('./main.js');
var assert = require('assert');

assert.deepEqual(commonElements([],[],[]),[]);
assert.deepEqual(commonElements([1],[1],[1]),[1]);
assert.deepEqual(commonElements([1,2],[1,3],[1,5]),[1]);
assert.deepEqual(commonElements([2,1],[1,3],[1,5]),[1]);
assert.deepEqual(commonElements([2,1],[1,3],[5]),[]);
assert.deepEqual(commonElements([1,2],[1,2],[1,2]),[1,2]);
assert.deepEqual(commonElements([1,2,5,6,10,20,30],[1,2,6,20,25,30],[1,2,3,7,15,20,30]),[1,2,20,30]);
