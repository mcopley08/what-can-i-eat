Router.configure({
  layoutTemplate: 'layout'
});


// Router.route('/', function () {
//   // render the layout template with a custom data context
//   this.layout('restaurants');
// });

Router.route('/restaurants');

Router.route('/allergies');

// Router.route('restaurants', function () {
//   this.render('restaurants');
// });

// Router.map(function() {
//   this.route('', {
//     path: '/'
//   });

//   this.route('contacts.show', {
//     path: '/contacts/:_id'
//   });
// });
