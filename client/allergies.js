// document.getElementById('dairy').onclick = function() {

// 	if(document.getElementById('dairy').checked ==true) 
// 	{
// 		alert("dairy");
// 	}	

// }

Template.allergies.events({
    'submit form': function(){
    	event.preventDefault();
    	var allergiesList = []; // store their names within a local array
    	var curr = document.getElementsByName('category');
	   	for(var i = 0; i < curr.length; i++){	   		
	   		if(curr[i].checked == true)
	   		{
	    		allergiesList.push(curr[i].id);
	    		// alert(curr[i].id);
	    	}	
		}

		var substitutions = document.getElementById('substitutions').value;
		
		var canthave = document.getElementById('seewhatyoucanthave').value;
		
		Router.go('results');
    }
   
  });



// Template.allergies.events({
//   'click .selectPill': function(e) {
//     var name = $(e.target).attr('for');
//     if ($("input[name='+name+']").attr('checked') == 'checked'){
//       $("input[name='+name+']").trigger('change').removeAttr('checked');
//     }
//     else{
//       $("input[name='+name+']").trigger('change').attr('checked', 'checked');
//     }
//   },
//   'change #input':function(e){
//     alert("value changed");
//   }
// })

//cannot set property onclick null 

// document.getElementById('soy').onclick = function() {
	
// 	alert("soy");

// }