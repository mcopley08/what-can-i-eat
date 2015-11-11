Router.configure({
  layoutTemplate: 'layout'
});


// Router.route('/', function () {
//   // render the layout template with a custom data context
//   this.layout('restaurants');
// });

Router.route('/restaurants');

Router.route('/allergies');

Router.route('/results');

Router.route('/edible');

Router.route('/not-edible');

// Router.route('exampleShow', {where:"server"});

// Router.route('restaurants', function () {
//   this.render('restaurants');
// });



//   this.route('contacts.show', {
//     path: '/contacts/:_id'
//   });
// });
