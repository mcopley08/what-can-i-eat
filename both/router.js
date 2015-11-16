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
    template:'restaurants'
  });

  this.route('allergies', {
    path: '/allergies'
  });
  this.route('results', {
    path: '/results'
  });
  this.route('edible', {
    path: '/edible'
  });
  this.route('not-edible', {
    path: '/not-edible'
  });
});

// Router.route('/restaurants');

// Router.route('/allergies');

// Router.route('/results');

// Router.route('/edible');

// Router.route('/not-edible');

// Router.route('exampleShow', {where:"server"});

// Router.route('restaurants', function () {
//   this.render('restaurants');
// });



//   this.route('contacts.show', {
//     path: '/contacts/:_id'
//   });
// });
