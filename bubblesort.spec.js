describe('Bubble Sort', function(){
  var array;
  beforeEach(function(){
    array = [3,2,5,6,1,7,4,8,9,0];
    spyOn(window, 'numberOfSwap').and.callThrough();
  });

  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('returns a sorted array', function(){

    expect(bubbleSort(array)).toEqual([0,1,2,3,4,5,6,7,8,9]);
  });

  it('Call the function 10 times', function(){
    var res = bubbleSort(array);
    expect(window.numberOfSwap.calls.count()).toEqual(54);
  });


});
