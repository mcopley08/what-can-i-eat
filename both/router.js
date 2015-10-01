Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', function () {
  // render the layout template with a custom data context
  this.layout('layout');
});

// Router.map(function() {
//   this.route('', {
//     path: '/'
//   });

//   this.route('contacts.show', {
//     path: '/contacts/:_id'
//   });
// });
