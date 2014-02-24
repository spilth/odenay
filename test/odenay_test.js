var odenay = require("../lib/odenay.js");
var assert = require('assert');

function test() {
  assert.equal('odenay', odenay.translate('node'));
}

if (require.main === module) require("test").run(test);

