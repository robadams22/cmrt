angular.module('starter.controllers', [])

.controller('SARCALLCtrl', function($scope, $cordovaSms) {
    $scope.sms={};
    $scope.sms.choice = 'FT';
 
      var options = {
          replaceLineBreaks: false, // true to replace \n by a new line, false by default
          android: {
            intent: 'INTENT'  // send SMS with the default SMS app
          //intent: ''        // send SMS without open any other app
          }
      }
 
  $scope.sendSms=function(sms){
      
    var configData = JSON.parse( window.localStorage.getItem( 'SARDATA' ));
      
    if (configData === null) {
        alert("Cannot send SARCALL messages until config is set");
         return;
    }
      /** Following keywords need to be replaced in the select value field
      Team:     {{team}}
      Message:  {{message}}
      Member:   {{member}}
      */
    var fullmessage = sms.choice;
    var optionalMessage = sms.message;
    var team = configData.team;
    var member = configData.member;
    fullmessage = fullmessage.replace("{team}", team);
    fullmessage = fullmessage.replace("{member}", member);
    fullmessage = fullmessage.replace("{message}", optionalMessage);   
    $scope.fullmessage= fullmessage;
    $cordovaSms
        .send(configData.phone, fullmessage, options)
          .then(function() {
              // Success! SMS was sent
              alert('Success');
          }, function(error) {
          // An error occurred
              alert(error);
        });//then
  }//sendSms
 
})

.controller('SarMsgsCtrl', function($scope, SARCALL) {

  $scope.sc = SARCALL.all();
//  $scope.remove = function(sc) {
//    SARCALL.remove(sc);
//  };
})


.controller('AccountCtrl', function($scope) {
    $scope.sar={phone:'',team:''};
    var savedData =  JSON.parse( window.localStorage.getItem( 'SARDATA' ));
    
    if (savedData !== null) {
         $scope.sar=savedData;
    }
    
    $scope.saveSAR = function (data) {
       // $localStorage.SARDATA = data;
        window.localStorage.setItem( 'SARDATA', JSON.stringify(data));
        alert("Data Saved!");
    }
});