Template.allergies.events({
    'submit form': function(event){
    	event.preventDefault();
    	var allergiesList = []; // store their names within a local array
    	var allergies = "";
    	var curr = document.getElementsByName('category');
	   	for(var i = 0; i < curr.length; i++){	   		
	   		if(curr[i].checked == true)
	   		{
	    		allergiesList.push(curr[i].id);
	    		allergies += curr[i].id +",";
	    	}	
	    		//alert(curr[i].id);
		}
		allergies = allergies.substring(0,allergies.length-1);

		var form_data = {}
		form_data["constraints"] = allergies;

    // .replace(/ /g,"");     #strips all whitespace
    var allow = document.getElementById('allow').value;
    allow = allow.split(",").map(Function.prototype.call, String.prototype.trim).join(",");
    var specialConstraints = document.getElementById('specialConstraints').value;
    specialConstraints = specialConstraints.split(",").map(Function.prototype.call, String.prototype.trim).join(",");
		var substitutions = document.getElementById('substitutions').value;

		// var canthave = document.getElementById('restrictions').value;
		// if(substitutions)
		// {
		// 	form_data["substitutions"]="true";
		// }

    if (allow !== "") {
      form_data["allow"] = allow;
    }
    if (specialConstraints !== "") {
      form_data["specialConstraints"] = specialConstraints;
    }
	
		form_data["returnBoth"]="true";
			
		

	apigClient = apigClientFactory.newClient({
      apiKey: 'ZisETd1uXK7fafeSTUJTQ9ypkNAH7YEvaEAHqwX3',
    });
    var params = {
            // This is where any modeled request parameters should be added. 
            // The key is the parameter name, as it is defined in the API in API Gateway.
            "restaurant-name": "burger-king",
            "type-of-menu": "full-menu"

          };

          var body = {
            // This is where you define the body of the request,
          };

          var additionalParams = {
            // If there are any unmodeled query parameters or headers that must be 
            //   sent with the request, add them here.
            headers: {
            },
            queryParams: form_data
          };

          console.log("request form data is: ");
          console.log(form_data);

    api_response = {};      
    apigClient.restaurantsRestaurantNameTypeOfMenuGet(params, body, additionalParams)
      .then(function(result) {
        // Add success callback code here.
        // alert(JSON.stringify(result, null, 2));
        api_response = result; 
        console.log("heres the api response");
        console.log(api_response);
        Router.go('results', {query: result});

        // return Lists.findOne(this.params._id);
         
      }).catch( function(result) {
          console.log('failed: ');
          // console.log(result);
        // console.log(JSON.stringify(result, null, 2));
        // Add error callback code here.
      });




    }
   
  });

Template.allergies.events({
  'click .back-button': function(event) {
    // Router.go('allergies'); 
    history.go(-1);
  }
});




