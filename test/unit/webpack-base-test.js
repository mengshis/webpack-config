const assert = require('assert');

describe('webpack.base.js test case', () => {
  const baseConfig = require('../../lib/webpack.base.js');

  it('entry', () => {
    // console.log(baseConfig.entry);
    assert.equal(baseConfig.entry.index, '/Users/shimeng/webpack-exmple/builder_webpack/test/smoke/template/src/index/index.js');
    assert.equal(baseConfig.entry.search, '/Users/shimeng/webpack-exmple/builder_webpack/test/smoke/template/src/search/index.js');
  });
});
