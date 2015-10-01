Template.layout.created = function () {
  this.autorun(function () {
    this.subscription = Meteor.subscribe('layout');
  }.bind(this));
};

Template.layout.rendered = function () {
  this.autorun(function () {
    if (!this.subscription.ready()) {
      IonLoading.show();
    } else {
      IonLoading.hide();
    }
  }.bind(this));
};

angular.module('ionicApp', ['ionic'])

.controller('mainlist', function($scope) {

  $scope.devList = [
    { text: "HTML5", checked: false },
    { text: "CSS3", checked: false },
    { text: "JavaScript", checked: false }
  ];

  $scope.pushNotificationChange = function() {
    console.log('Push Notification Change', $scope.pushNotification.checked);
  };
  
  $scope.pushNotification = { checked: true };
  $scope.emailNotification = 'Subscribed';
  
});