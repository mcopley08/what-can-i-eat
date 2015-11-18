Template.allergies.events({
    'submit form': function(event){
    	event.preventDefault();
    	var allergiesList = []; // store their names within a local array
    	var curr = document.getElementsByName('category');
	   	for(var i = 0; i < curr.length; i++){	   		
	   		if(curr[i].checked == true)
	   		{
	    		allergiesList.push(curr[i].id);
	    		alert(curr[i].id);
	    	}	
		}
		var substitutions = document.getElementById('substitutions').value;
		
		var canthave = document.getElementById('restrictions').value;
		
	    if(curr.length > 0)
		{
			Router.go('results');
		}	
		else{
			alert("Please input a food allergy");
		}
		
    }
   
  });



