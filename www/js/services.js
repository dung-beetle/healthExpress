hexpress.factory('recipeService', function($firebaseArray) {
   var fb = new Firebase("https://healthexpress.firebaseIO.com");
   var recs = $firebaseArray(fb);
   var recipeService = {
       all: recs,
       get: function(recId) {
           return recs.$getRecord(recId);
       }
   };
   return recipeService;
});