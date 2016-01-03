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
    return array.reduce(value, func);
  }
}
