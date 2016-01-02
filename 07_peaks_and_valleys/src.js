/*
  The primary goal of this warm-up is to work on refactoring
  out duplicated code. As you build the peaks and valleys
  methods, some duplication will arise. Get the tests passing
  first and then refactor to remove the duplication.

  Note: The peaks/valleys are fun to console.log out while
  writing these methods.
*/

module.exports = {
  peak: function() {
    return '/\\';
  },

  valley: function() {
    return '___';
  },
  peaks: function(num) {
    var peaks = '';
    for(i=0; i<num; i++){
      peaks += '/\\';
    }
    return peaks;
  },
  valleys: function(num){
    var valleys = '';
    for(i=0; i<num; i++){
      valleys += '___';
    }
    return valleys;
  },
  peaksAndValleys: function(p, v){
    peaks = '';
    valleys = '';
    for(i=0; i<p; i++){
      peaks += '/\\';
    }
    for(i=0; i<v; i++){
      valleys += '___';
    }
    return peaks + valleys;
  }
}
