var Promise = Meteor.npmRequire('es6-promise').Promise;
axios = Meteor.npmRequire('axios');

apigClient = apigClientFactory.newClient({
  apiKey: 'ZisETd1uXK7fafeSTUJTQ9ypkNAH7YEvaEAHqwX3'
});

Router.map(function () {
  this.route('exampleShow', {
  	where: 'server',
    path: '/example',

    action: function () {

    	  var params = {
		    // This is where any modeled request parameters should be added. 
		    // The key is the parameter name, as it is defined in the API in API Gateway.
		    "restaurant-name": "burger-king"
		  };

		  var body = {
		    // This is where you define the body of the request,
		  };

		  var additionalParams = {
		    // If there are any unmodeled query parameters or headers that must be 
		    //   sent with the request, add them here.
		    headers: {
		    },
		    queryParams: {
		    }
		  };

		  var res = this.response;

		  apigClient.restaurantsRestaurantNameGet(params, body, additionalParams)
		      .then(function(result) {
		        // Add success callback code here.
		        console.log(JSON.stringify(result, null, 2));
      			res.writeHead(200, {'Content-Type': 'text/html'});
      			res.end(JSON.stringify(result, null, 2));
		      }).catch( function(result){
		      	console.log('failed');
		        // Add error callback code here.
		      });

    }
  });
});