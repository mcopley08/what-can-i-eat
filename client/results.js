Template.results.rendered = function () {

  // alert(api_response["data"].edible.items[0].name);
  
  // alert(Object.keys(api_response["data"].edible.items).length);
  // alert(Object.keys(api_response).length);
  document.getElementById("edible").className +="active";
  document.getElementById("e").style.display ='inline';
  document.getElementById("n").style.display ='none';

  var size = Object.keys(api_response["data"].edible.items).length;

  var out = '<li class="list-group-item item-button-right col col-90" style="padding: 20px 20px; text-align: center; background-color: rgba(0,255,0,0.3)">';
    out += '<strong>Items</strong></li>';
  document.getElementById("first").innerHTML += out;

  for(var i=0; i< size; i++)
  {
    var name = api_response["data"].edible.items[i].name;
    var ingredients ="";
    var allergens = "";
    if(typeof api_response["data"].edible.items[i].ingredients != 'undefined' )
    {
        ingredients = api_response["data"].edible.items[i].ingredients;
    }
    else if(typeof api_response["data"].edible.items[i].components != 'undefined')
    {
         ingredients = api_response["data"].edible.items[i].components;
    } 
    allergens += "<strong>dairy:</strong> " + api_response["data"].edible.items[i].dairy + "&nbsp;&nbsp;&nbsp;&nbsp;";
    allergens += "<strong>eggs:</strong> " + api_response["data"].edible.items[i].eggs + "&nbsp;&nbsp;&nbsp;&nbsp;";
    allergens += "<strong>soy:</strong> " + api_response["data"].edible.items[i].soy + "&nbsp;&nbsp;&nbsp;&nbsp;";
    allergens += "<strong>fish:</strong> " + api_response["data"].edible.items[i].fish + "<br>";
    allergens += "<strong>shellfish:</strong> " + api_response["data"].edible.items[i].shellfish + "&nbsp;&nbsp;&nbsp;&nbsp;";
    allergens += "<strong>peanuts:</strong> " + api_response["data"].edible.items[i].peanuts + "&nbsp;&nbsp;&nbsp;&nbsp;";
    allergens += "<strong>treenuts:</strong> " + api_response["data"].edible.items[i].treenuts + "&nbsp;&nbsp;&nbsp;&nbsp;";
    allergens += "<strong>wheat:</strong> " + api_response["data"].edible.items[i].wheat + "&nbsp;&nbsp;&nbsp;&nbsp;";

    var out_good_items = '<li class="list-group-item item-button-right col col-90" style="padding: 20px 20px;">';
    out_good_items += name +'<button class="button button-positive button-small button-outline" id="';
    out_good_items += name+'">View</button></li>';
    var outer_good_items = '<div id="overlay'+name+'" style="display:none; position: absolute; top: 0; bottom: 0; background: #fff; width: 100%; height: 100%; opacity: 0.8; z-index:100;"></div><div class="popup col col-80" id="pop'+name+'" style="display: none; position: absolute; top: 10%; left: 10%; background: #fff; margin-top: -50px; z-index: 200; width: auto;">';
    outer_good_items += '<div class="popupcontent" style="padding: 10px;"><div class="card col"><div class="item item-divider"><div class="popupcontrols"><span id="popclose'+name+'" style="float: right; padding: 10px; cursor: pointer;"><i class="icon ion-close"></i></span>'+name+'</div>';
    outer_good_items += '</div><div class="item item-text-wrap"><a class="item item-thumbnail-center" href="#"><strong>Ingredients</strong></a>'+ingredients + "<br><br>" + allergens;
    outer_good_items += '</div><div class="item item-divider"></div></div></div></div>';
    document.getElementById("first").innerHTML += out_good_items; 
    document.getElementById("first").innerHTML += outer_good_items; 
   
  }  

 
  size = Object.keys(api_response["data"]["not-edible"].items).length;
  var out = '<li class="list-group-item item-button-right col col-90" style="padding: 20px 20px; text-align: center; background-color: rgba(255,0,0,0.25)">';
    out += '<strong>Items</strong></li>';
  document.getElementById("second").innerHTML += out;


  for(var j=0; j< size; j++)
  {
    var name = api_response["data"]["not-edible"].items[j].name;
    var ingredients ="";
    var allergens = "";
    if(typeof api_response["data"]["not-edible"].items[j].ingredients != 'undefined' )
    {
        ingredients = api_response["data"]["not-edible"].items[j].ingredients;
    }
    else if(typeof api_response["data"]["not-edible"].items[j].components != 'undefined')
    {
         ingredients = api_response["data"]["not-edible"].items[j].components;
    }  

    allergens += "<strong>dairy:</strong> " + api_response["data"]["not-edible"].items[j].dairy + "&nbsp;&nbsp;&nbsp;&nbsp;";
    allergens += "<strong>eggs:</strong> " + api_response["data"]["not-edible"].items[j].eggs + "&nbsp;&nbsp;&nbsp;&nbsp;";
    allergens += "<strong>soy:</strong> " + api_response["data"]["not-edible"].items[j].soy + "&nbsp;&nbsp;&nbsp;&nbsp;";
    allergens += "<strong>fish:</strong> " + api_response["data"]["not-edible"].items[j].fish + "<br>";
    allergens += "<strong>shellfish:</strong> " + api_response["data"]["not-edible"].items[j].shellfish + "&nbsp;&nbsp;&nbsp;&nbsp;";
    allergens += "<strong>peanuts:</strong> " + api_response["data"]["not-edible"].items[j].peanuts + "&nbsp;&nbsp;&nbsp;&nbsp;";
    allergens += "<strong>treenuts:</strong> " + api_response["data"]["not-edible"].items[j].treenuts + "&nbsp;&nbsp;&nbsp;&nbsp;";
    allergens += "<strong>wheat:</strong> " + api_response["data"]["not-edible"].items[j].wheat + "&nbsp;&nbsp;&nbsp;&nbsp;";

    out_bad_items = '<li class="list-group-item item-button-right col col-90" style="padding: 20px 20px;">';
    out_bad_items += name +'<button class="button button-positive button-small button-outline" id="';
    out_bad_items += name+'">View</button></li>';
    outer_bad_items = '<div id="overlay'+name+'" style="display:none; position: absolute; top: 0; bottom: 0; background: #fff; width: 100%; height: 100%; opacity: 0.8; z-index:100;"></div><div class="popup col col-70" id="pop'+name+'" style="display: none; position: absolute; top: 50%; left: 50%; background: #fff; margin-left: -130px; margin-top: -50px; z-index: 200; width:300px;">';
    outer_bad_items += '<div class="popupcontent" style="padding: 10px;"><div class="card col"><div class="item item-divider"><div class="popupcontrols"><span id="popclose'+name+'" style="float: right; padding: 10px; cursor: pointer;"><i class="icon ion-close"></i></span>'+name+'</div>';
    outer_bad_items += '</div><div class="item item-text-wrap"><a class="item item-thumbnail-center" href="#"><strong>Ingredients</strong></a>'+ingredients + "<br><br>" + allergens;
    outer_bad_items += '</div><div class="item item-divider"></div></div></div></div>';
    // document.getElementById("first").appendChild(out);
    document.getElementById("second").innerHTML += out_bad_items; 
    document.getElementById("second").innerHTML += outer_bad_items; 
   
  } 

  size = Object.keys(api_response["data"].edible.components).length;

  var out = '<li class="list-group-item item-button-right col col-90" style="padding: 20px 20px; text-align: center; background-color: rgba(0,255,0,0.3)">';
    out += '<strong>Components</strong></li>';
  document.getElementById("first").innerHTML += out;

  for(var i=0; i< size; i++)
  {
    var name = api_response["data"].edible.components[i].name;
    var ingredients = api_response["data"].edible.components[i].ingredients;
    var allergens = "";

    allergens += "<strong>dairy:</strong> " + api_response["data"].edible.components[i].dairy + "&nbsp;&nbsp;&nbsp;&nbsp;";
    allergens += "<strong>eggs:</strong> " + api_response["data"].edible.components[i].eggs + "&nbsp;&nbsp;&nbsp;&nbsp;";
    allergens += "<strong>soy:</strong> " + api_response["data"].edible.components[i].soy + "&nbsp;&nbsp;&nbsp;&nbsp;";
    allergens += "<strong>fish:</strong> " + api_response["data"].edible.components[i].fish + "<br>";
    allergens += "<strong>shellfish:</strong> " + api_response["data"].edible.components[i].shellfish + "&nbsp;&nbsp;&nbsp;&nbsp;";
    allergens += "<strong>peanuts:</strong> " + api_response["data"].edible.components[i].peanuts + "&nbsp;&nbsp;&nbsp;&nbsp;";
    allergens += "<strong>treenuts:</strong> " + api_response["data"].edible.components[i].treenuts + "&nbsp;&nbsp;&nbsp;&nbsp;";
    allergens += "<strong>wheat:</strong> " + api_response["data"].edible.components[i].wheat + "&nbsp;&nbsp;&nbsp;&nbsp;";

    var out_good_components = '<li class="list-group-item item-button-right col col-90" style="padding: 20px 20px;">';
    out_good_components += name +'<button class="button button-positive button-small button-outline" id="';
    out_good_components += name+'">View</button></li>';
    var outer_good_components = '<div id="overlay'+name+'" style="display:none; position: absolute; top: 0; bottom: 0; background: #fff; width: 100%; height: 100%; opacity: 0.8; z-index:100;"></div><div class="popup col col-80" id="pop'+name+'" style="display: none; position: absolute; top: 10%; left: 10%; background: #fff; margin-top: -50px; z-index: 200; width: auto;">';
    outer_good_components += '<div class="popupcontent" style="padding: 10px;"><div class="card col"><div class="item item-divider"><div class="popupcontrols"><span id="popclose'+name+'" style="float: right; padding: 10px; cursor: pointer;"><i class="icon ion-close"></i></span>'+name+'</div>';
    outer_good_components += '</div><div class="item item-text-wrap"><a class="item item-thumbnail-center" href="#"><strong>Ingredients</strong></a>'+ingredients + "<br><br>" + allergens;
    outer_good_components += '</div><div class="item item-divider"></div></div></div></div>';
    document.getElementById("first").innerHTML += out_good_components; 
    document.getElementById("first").innerHTML += outer_good_components; 
   
  }  

 
  size = Object.keys(api_response["data"]["not-edible"].components).length;
  console.log("non edible components has a length of: " + size);

  var out = '<li class="list-group-item item-button-right col col-90" style="padding: 20px 20px; text-align: center; background-color: rgba(255,0,0,0.25)">';
    out += '<strong>Components</strong></li>';
  document.getElementById("second").innerHTML += out;

  for(var j=0; j< size; j++)
  {
    var name = api_response["data"]["not-edible"].components[j].name;
    var ingredients = api_response["data"]["not-edible"].components[j].ingredients;
    var allergens = "";

    allergens += "<strong>dairy:</strong> " + api_response["data"]["not-edible"].components[j].dairy + "&nbsp;&nbsp;&nbsp;&nbsp;";
    allergens += "<strong>eggs:</strong> " + api_response["data"]["not-edible"].components[j].eggs + "&nbsp;&nbsp;&nbsp;&nbsp;";
    allergens += "<strong>soy:</strong> " + api_response["data"]["not-edible"].components[j].soy + "&nbsp;&nbsp;&nbsp;&nbsp;";
    allergens += "<strong>fish:</strong> " + api_response["data"]["not-edible"].components[j].fish + "<br>";
    allergens += "<strong>shellfish:</strong> " + api_response["data"]["not-edible"].components[j].shellfish + "&nbsp;&nbsp;&nbsp;&nbsp;";
    allergens += "<strong>peanuts:</strong> " + api_response["data"]["not-edible"].components[j].peanuts + "&nbsp;&nbsp;&nbsp;&nbsp;";
    allergens += "<strong>treenuts:</strong> " + api_response["data"]["not-edible"].components[j].treenuts + "&nbsp;&nbsp;&nbsp;&nbsp;";
    allergens += "<strong>wheat:</strong> " + api_response["data"]["not-edible"].components[j].wheat + "&nbsp;&nbsp;&nbsp;&nbsp;";

    out_bad_components = '<li class="list-group-item item-button-right col col-90" style="padding: 20px 20px;">';
    out_bad_components += name +'<button class="button button-positive button-small button-outline" id="';
    out_bad_components += name+'">View</button></li>';
    outer_bad_components = '<div id="overlay'+name+'" style="display:none; position: absolute; top: 0; bottom: 0; background: #fff; width: 100%; height: 100%; opacity: 0.8; z-index:100;"></div><div class="popup col col-70" id="pop'+name+'" style="display: none; position: absolute; top: 50%; left: 50%; background: #fff; margin-left: -130px; margin-top: -50px; z-index: 200; width:300px;">';
    outer_bad_components += '<div class="popupcontent" style="padding: 10px;"><div class="card col"><div class="item item-divider"><div class="popupcontrols"><span id="popclose'+name+'" style="float: right; padding: 10px; cursor: pointer;"><i class="icon ion-close"></i></span>'+name+'</div>';
    outer_bad_components += '</div><div class="item item-text-wrap"><a class="item item-thumbnail-center" href="#"><strong>Ingredients</strong></a>'+ingredients + "<br><br>" + allergens;
    outer_bad_components += '</div><div class="item item-divider"></div></div></div></div>';
    // document.getElementById("first").appendChild(out);
    document.getElementById("second").innerHTML += out_bad_components; 
    document.getElementById("second").innerHTML += outer_bad_components; 
   
  }
};      

Template.results.events({
  'click .tab-item': function(event) {
    var id = event.target.name;
    var name = event.currentTarget.name;


    if(id == "edible" || name == "edible")
    {
        // document.getElementById("main").innerHTML='<object type="text/html" data="edible.html"></object>';
        document.getElementById("e").style.display='inline';
        document.getElementById("n").style.display ='none';
        document.getElementById("edible").className +=" active";
        document.getElementById("not-edible").className = "tab-item col col-50";
    } 
    if(id == "not-edible" || name == "not-edible")
    {
        // document.getElementById("main").innerHTML='<object type="text/html" data="not-edible.html"></object>';
        document.getElementById("n").style.display= 'inline'; 
        document.getElementById("e").style.display ='none';
        document.getElementById("not-edible").className +=" active";
        document.getElementById("edible").className = "tab-item col col-50";
    } 
    // Session.set('currentTab', '');
    
  }

});

Template.results.events({
'click .button': function(event){

    var button = event.target.id;
    // alert(event.target.id);
    var over = "overlay"+button;
    var overlay = document.getElementById(over);
    overlay.style.display = 'block';
    // var button = document.getElementById("button");
    var pop = "pop"+button;
    var popup = document.getElementById(pop);
    popup.style.display = 'block';  
    var popclose = "popclose"+button;
    var closePopup = document.getElementById(popclose);
      closePopup.onclick = function() {
        overlay.style.display = 'none';
        popup.style.display = 'none';
      }  
      
  //   if(button =="eat")
  //   {
  //     var overlay = document.getElementById("overlay_one");
  //     overlay.style.display = 'block';
  //     // 'display: block; position: absolute; top: 0; bottom: 0; background: #fff; width: 100%; height: 100%; opacity: 0.8; z-index: 100';
  //     var button = document.getElementById("button");
  //     var popup = document.getElementById("popup_one");
  //     popup.style.display = 'block';  
  //     var closePopup = document.getElementById("popupclose_one");
  //       closePopup.onclick = function() {
  //         overlay.style.display = 'none';
  //         popup.style.display = 'none';
  //     };
  //   }  
  //   if(button =="not")
  //   {
  //       var overlay = document.getElementById("overlay_two");
  //       overlay.style.display = 'block';
  //       var popup = document.getElementById("popup_two");
  //       popup.style.display = 'block';
  //       var closePopup = document.getElementById("popupclose_two");
  //       closePopup.onclick = function() {
  //       overlay.style.display = 'none'; 
  //       popup.style.display = 'none';
  //       };
  //   }  
  }
    
});
