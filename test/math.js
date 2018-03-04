const assertRevert = require('./assertRevert')
const assertJump = require('./assertJump')
const SafeMathMock = artifacts.require('SafeMathMock');

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

  it('adds correctly', async function () {
    let a = 5678;
    let b = 1234;
    await instance.add(a, b);
    let result = await instance.result();

    assert.equal(result, a + b);
  });

  it('subtracts correctly', async function () {
    let a = 5678;
    let b = 1234;
    await instance.subtract(a, b);
    let result = await instance.result();

    assert.equal(result, a - b);
  });

  it('should throw an error if subtraction result would be negative', async function () {
    let a = 1234;
    let b = 5678;
    try {
      await instance.subtract(a, b);
      assert.fail('should have thrown before');
    } catch (error) {
      assertJump(error);
    }
  });

  it('should throw an error on addition overflow', async function () {
    let a = 115792089237316195423570985008687907853269984665640564039457584007913129639935;
    let b = 1;
    await assertRevert(instance.add(a, b));
  });

  it('should throw an error on multiplication overflow', async function () {
    let a = 115792089237316195423570985008687907853269984665640564039457584007913129639933;
    let b = 2;
    await assertRevert(instance.multiply(a, b));
  });
})