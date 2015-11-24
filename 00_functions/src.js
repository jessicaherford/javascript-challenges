module.exports = {

  helloWorld: function(){
    return "Hello World";
  },

  hello: function(string){
    // return Hello + string you pass it
    return "Hello " + string;
  },

  shout: function(string){
    // return Hello + Uppercase string
    return "Hello " + string.toUpperCase();
  },

  whisper: function(string){
    // return Hello + Lowercase string
    return "Hello " + string.toLowerCase();
  },

  separate: function(string){
    //returns the characters of the given word as an array
    //('jumbo').toEqual(['j', 'u', 'm', 'b', 'o'])
    return string.split('');
  },

  reverseJoin: function(array){
    //returns the characters of the given array, reversed and joined
    //['j', 'u', 'm', 'b', 'o'])).toEqual('o,b,m,u,j')
    //console.log(array.toString.reverse());
    var array = array.reverse().toString();
    return array;
  },

  reverseJoinCompact: function(array){
    //returns the characters of the given array, reversed and joined by nothing
    var array = array.reverse().toString('').replace(/,/g, '');
    return array;
  },

  backwardsDay: function(string){
    //returns Hello plus the string you pass it, reversed
    //"Hello gorF"
    string = string.split('').reverse().join('');
    return "Hello " + string;
  }


}
