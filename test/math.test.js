var SafeMathMock = artifacts.require('SafeMathMock');

contract('SafeMathMock', function (accounts) {
  let instance;

  before(async function () {
    instance = await SafeMathMock.new()
  })

  it('multiplies correctly', async function () {
    let a = 5678
    let b = 1234
    await instance.multiply(a, b)
    let result = await instance.result()
    assert.equal(result, a * b)
  })

})