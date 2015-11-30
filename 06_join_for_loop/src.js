/*
  Use a for loop, NOT forEach to complete each warm-up.
*/

module.exports = {

  joinWithFor: function(list) {
  return list.join('');
},

  joinWithForAndIndex: function(array){
    var newArray = [];
    for(var i = 0;i<array.length; i++){
      newArray.push(array[i] + (i));
    }
    return newArray.join('');
  },

  joinWithoutOddCharacters: function(array){
    var newArray = [];
    for(var i = 0; i<array.length; i++){
      if(i%2===0){
        newArray.push(array[i])
      }
    }
    return newArray.join('');
  },

  joinWithForAndToken: function(list, token){
    return list.join(token);
  },

  joinWithForAndAlternatingTokens: function(array, token1, token2){
    list = '';
    for(i=0;i<array.length; i++){
      if(i%2===0){
        list+= array[i];
        list+= token1;
      }
      else{
        list += array[i];
        list += token2;
      }
    }
    return list.substring(0,list.length-1);
    }

}
