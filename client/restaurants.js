Template.restaurants.created = function () {
  this.autorun(function () {
    this.subscription = Meteor.subscribe('restaurants');
  }.bind(this));
};

Template.restaurants.rendered = function () {
  this.autorun(function () {
    if (!this.subscription.ready()) {
      IonLoading.show();
    } else {
      IonLoading.hide();
    }
  }.bind(this));
};

Template.restaurants.events({
    'submit form': function(){
      event.preventDefault();
      var restName = event.target.restaurantName.value;
      alert(restName);
      Router.go('allergies');
    }
   
  });

// Template.restaurants.helpers({
//   contacts: function () {
//     return Contacts.find();
//   }
// });