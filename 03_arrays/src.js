module.exports = {

  first: function(array) {
    return array[0];
  },

  //return last element for a given Array
  last: function(array){
    return array.pop();
  },

  empty: function(array){
    if(array.length === 0){
      return true;
    }
    else{
      return false;
    }
  },

  first_n: function(array, n){
    if(array.length ===0){
    return [];
  }
    else if(n > array.length){
    return array(0, array.length-n);
  }
    else{
    return array;
  }
}


// var origArray = [3, 5, 7, 9];
// var newArray = origArray. slice(0, -1);
// document.write(origArray);
// document.write("<br/>");
// newArray = origArray. slice(-2);
// document.write(newArray);
//
// // Output:
// // 3,5,7,9
// // 7,9





}
