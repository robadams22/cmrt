angular.module('starter.services', [])

.factory('SARCALL', function() {
var sarcall = [
{
    id: 1,
    name: 'Ben Sparrow',
    lastText: 'You on your way?'
  },
    {
    id: 2,
    name: 'Ben Sparrow',
    lastText: 'You on your way?'
  }
];
    
     return {
    all: function() {
      return sarcall;
    },
    remove: function(sc) {
      sarcall.splice(sarcall.indexOf(sc), 1);
    },
    get: function(sarId) {
      for (var i = 0; i < sarcall.length; i++) {
        if (sarcall[i].id === parseInt(sarId)) {
          return sarcall[i];
        }
      }
      return null;
    }
  };
});
