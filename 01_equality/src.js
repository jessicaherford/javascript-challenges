module.exports = {
  sameLength: function(string1, string2) {
    // if both strings are the same length return true
    if(string1.length === string2.length){
      return true;
    }
    else{
      return false;
    }
  },

  firstGreater: function(thing1, thing2){
    //returns true if the first argument is (strictly) greater than the second argument
   if(thing1 > thing2){
     return true;
   }
   else{
     return false;
   }

 },

 firstGreaterOrEqualTo: function(arg1, arg2){
   if(arg1 >= arg2){
     return true;
   }
   else{
     return false;
   }

 },

 firstLengthGreater: function(arg1, arg2){
   if(arg1.length > arg2.length){
     return true;
   }
   else{
     return false;
   }

 },

 secondGreater: function(arg1, arg2){
   if(arg2 > arg1){
     return true;
   }
   else{
     return false;
   }
 }




}
