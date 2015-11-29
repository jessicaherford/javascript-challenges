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
    else if(n < array.length){
      array = array.slice(0,n);
      return array;
}
    else{
    return array;
  }
},

  last_n: function(array, n){
    if(array.length === 0){
      return [];
    }
    else if(n < array.length){
      array = array.slice(n-1, array.length);
      return array;
    }
    else {
      return array;
    }
  },

  drop: function(array,n){
    if(array.length > n){
      array = array.slice(n, array.length);
      return array;
    }
    else{
      return [];
    }

  },

  union: function(array1, array2){
      if(array1.length ===0 && array2.length ===0){
        return [];
      }
      else{
        array = array1.concat(array2);
        return array;
      }
  },

  intersection: function(array1, array2){

  }





}
