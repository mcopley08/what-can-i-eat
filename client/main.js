Template.main.created = function () {
  this.autorun(function () {
    this.subscription = Meteor.subscribe('main');
  }.bind(this));
};

Template.main.rendered = function () {
  this.autorun(function () {
    if (!this.subscription.ready()) {
      IonLoading.show();
    } else {
      IonLoading.hide();
    }
  }.bind(this));
};

Template.main.events({
    'submit form': function(event){
      event.preventDefault();
      Router.go('/restaurants');      
    }
   
  });

// Template.restaurants.helpers({
//   contacts: function () {
//     return Contacts.find();
//   }
// });
