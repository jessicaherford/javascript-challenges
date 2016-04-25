/*
  Do not use standard libraries (like Math) to complete this warm-up.
*/

module.exports = {
  maximum: function(array) {
     var max = 0;
     if(array.length === 0){
       return undefined;
     }

    for(i=0;i<array.length; i++){
      if(array[i] > max){
        max = array[i];
      }
    }
    return max;
  },

  minimum: function(array) {
  var min = 1000000000000000000;
  if(array.length === 0){
    return undefined;
  }
   for(i=0;i<array.length; i++){
     if(array[i] < min){
       min = array[i];
     }
   }
   return min;
  },

  average: function(arrayOfNumbers) {
      var total = 0;
      var avg = 0;
      for(i=0; i<arrayOfNumbers.length; i++){
        total += arrayOfNumbers[i];
      }
      avg = total/arrayOfNumbers.length;
      return avg;
  },

  matrixRowMaximum: function(arrayOfArrays) {
    arrayOfArrays.forEach(function(array){
      var max = [];
      console.log(array);
      array.forEach(function(i){
        var minCompare = 0;
      if(i > minCompare){
        minCompare += i;
      }
      max.push(minCompare);

      })
      console.log('******' + minCompare);
      return max;
    })
  },

  matrixRowMinimum: function(arrayOfArrays) {
  },

  matrixRowAverage: function(arrayOfArrays) {
  },

  sortedRowMatrix: function(arrayOfArrays) {
  },

  lengthOfWords: function(sentence) {
  }
}
