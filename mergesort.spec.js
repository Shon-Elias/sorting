describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    var arr = [1,2,3];
    expect(split(arr)).toEqual(2);
  });
});
