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

