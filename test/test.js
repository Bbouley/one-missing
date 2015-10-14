var expect = chai.expect;
// var should = chai.should();

// sample!
describe('One Missing', function() {
  it('should sort array and then find missing number in array of 1 to 10', function() {

    var arrayToSort = [1,4,3,5,8,7,6,9,10];
    var arrayToSort2 = [10,8,7,6,5,4,3,2,1];
    var arrayToSort3 = [7,3,5,6,2,1,8,9,10];
    var array1 = [2,3,4,5,6,7,8,9,10];
    var array2 = [1,3,4,5,6,7,8,9,10];
    var array3 = [1,2,4,5,6,7,8,9,10];
    var array9 = [1,2,3,4,5,6,7,8,10];
    var array10 = [1,2,3,4,5,6,7,8,9];

    expect(oneMissingNoOrder(array1)).to.equal(1);
    expect(oneMissingNoOrder(array2)).to.equal(2);
    expect(oneMissingNoOrder(array3)).to.equal(3);
    expect(oneMissingNoOrder(array9)).to.equal(9);
    expect(oneMissingNoOrder(array10)).to.equal(10);
    expect(oneMissingNoOrder(arrayToSort)).to.equal(2);
    expect(oneMissingNoOrder(arrayToSort2)).to.equal(9);
    expect(oneMissingNoOrder(arrayToSort3)).to.equal(4);
  });
});
