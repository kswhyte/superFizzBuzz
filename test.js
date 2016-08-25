describe('superFizzBuzz', function() {
  it('returns SuperFizzBuzz if n modulo 3,5, or 7 is 0', function() {
    assert.equal(superFizzBuzz(105), 'SuperFizzBuzz');
  });

  it('returns SuperFizz if n modulo 3 and 7 is 0', function() {
    assert.equal(superFizzBuzz(21), 'SuperFizz');
  });

  it('returns SuperBuzz if n modulo 5 and 7 is 0', function() {
    assert.equal(superFizzBuzz(35), 'SuperBuzz');
  });

  it('returns FizzBuzz if n modulo 5 and 7 is 0', function() {
    assert.equal(superFizzBuzz(15), 'FizzBuzz');
  });

  it('returns Fizz if n modulo 3 is 0', function() {
    assert.equal(superFizzBuzz(3), 'Fizz');
  });

  it('returns Buzz if n modulo 5 is 0', function() {
    assert.equal(superFizzBuzz(5), 'Buzz');
  });

  it('returns the number if it is not a multiple of 3 or 5', function() {
    assert.strictEqual(superFizzBuzz(4), 4);
  });
});
