module.exports = {

  simpleCall: function(callback){
    return callback();
  },

  each: function(array, func){
    return array.filter(func);
  },

  map: function(array, func){
    return array.map(func);
  },

  reduce: function(array, value, func){
    return array.reduce(func, value);
  },

  find: function(array, func, arg){
    return array.find(func, arg);
  },

  any: function(array, func){
    return (array.filter(func).length) ? true : false
  },

  all: function(array, func){
    return (array.filter(func)) ? true : false
  }



}
