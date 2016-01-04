Router.configure({
  layoutTemplate: 'layout'
});


// Router.route('/', function () {
//   // render the layout template with a custom data context
//   this.layout('restaurants');
// });

//This is for the landing page
// Router.route('/', {
//     template: 'restaurants'
// });

Router.map(function() {
  this.route('/', {
    template:'main'
  });

  this.route('restaurants', {
    path: '/restaurants',
  });
  this.route('allergies', {
    path: '/allergies',
  });
  this.route('results', {
    path: '/results',
  });
  
});
