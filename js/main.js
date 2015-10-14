// add scripts

console.log("sanity check!");

// var totalArray = [1,2,3,4,5,6,7,8,9,10];

// function oneMissing(array){
//   if(array[0] === 2){
//     return 1;
//   } else{
//   for (var i = 0; i < array.length; i++) {
//     if(array[i+1] !== array[i] +1){
//       return array[i] + 1;
//     }
//   }
// }
// }

// function sort(array){

// }

function oneMissingNoOrder(array){
  var expectedTotal = 55;
  var arrayTotal = 0;
  for (var i = 0; i < array.length; i++) {
    arrayTotal += array[i];
  }
  return expectedTotal - arrayTotal;
}
