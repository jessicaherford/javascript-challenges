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
  if(n>0){

  }
  else{
    return array;
  }
}





}
