Template.results.rendered = function () {

  // alert(api_response["data"].edible.items[0].name);
  
  // alert(Object.keys(api_response["data"].edible.items).length);
  // alert(Object.keys(api_response).length);
  document.getElementById("edible").className +="active";
  document.getElementById("e").style.display ='inline';
  document.getElementById("n").style.display ='none';

  var size = Object.keys(api_response["data"].edible.items).length;

  for(var i=0; i< size; i++)
  {
    var name = api_response["data"].edible.items[i].name;
    var ingredients ="";
    if(typeof api_response["data"].edible.items[i].ingredients != 'undefined' )
    {
        ingredients = api_response["data"].edible.items[i].ingredients;
    }
    else if(typeof api_response["data"].edible.items[i].components != 'undefined')
    {
         ingredients = api_response["data"].edible.items[i].components;
    }  
    var out = '<li class="list-group-item item-button-right col col-90" style="padding: 20px 20px;">';
    out += name +'<button class="button button-positive button-small button-outline" id="';
    out += name+'">View</button></li>';
    var outer = '<div id="overlay'+name+'" style="display:none; position: absolute; top: 0; bottom: 0; background: #fff; width: 100%; height: 100%; opacity: 0.8; z-index:100;"></div><div class="popup col col-80" id="pop'+name+'" style="display: none; position: absolute; top: 50%; left: 50%; background: #fff; margin-left: -130px; margin-top: -50px; z-index: 200; width:300px;">';
    outer += '<div class="popupcontent" style="padding: 10px;"><div class="card col"><div class="item item-divider"><div class="popupcontrols"><span id="popclose'+name+'" style="float: right; padding: 10px; cursor: pointer;"><i class="icon ion-close"></i></span> Ingredients</div>';
    outer += '</div><div class="item item-text-wrap"><a class="item item-thumbnail-center" href="#"><img class="image" src="http://s1.postimg.org/9k3jne9hb/nuggets.png"/> </a>'+ingredients;
    outer += '</div><div class="item item-divider"></div></div></div></div>';
    document.getElementById("first").innerHTML += out; 
    document.getElementById("first").innerHTML += outer; 
   
  }  

 
  size = Object.keys(api_response["data"]["not-edible"].items).length;


  for(var j=0; j< size; j++)
  {
    var name = api_response["data"]["not-edible"].items[j].name;
    var ingredients ="";
    if(typeof api_response["data"]["not-edible"].items[j].ingredients != 'undefined' )
    {
        ingredients = api_response["data"]["not-edible"].items[j].ingredients;
    }
    else if(typeof api_response["data"]["not-edible"].items[j].components != 'undefined')
    {
         ingredients = api_response["data"]["not-edible"].items[j].components;
    }  
    out = '<li class="list-group-item item-button-right col col-90" style="padding: 20px 20px;">';
    out += name +'<button class="button button-positive button-small button-outline" id="';
    out += name+'">View</button></li>';
    outer = '<div id="overlay'+name+'" style="display:none; position: absolute; top: 0; bottom: 0; background: #fff; width: 100%; height: 100%; opacity: 0.8; z-index:100;"></div><div class="popup col col-70" id="pop'+name+'" style="display: none; position: absolute; top: 50%; left: 50%; background: #fff; margin-left: -130px; margin-top: -50px; z-index: 200; width:300px;">';
    outer += '<div class="popupcontent" style="padding: 10px;"><div class="card col"><div class="item item-divider"><div class="popupcontrols"><span id="popclose'+name+'" style="float: right; padding: 10px; cursor: pointer;"><i class="icon ion-close"></i></span> Ingredients</div>';
    outer += '</div><div class="item item-text-wrap"><a class="item item-thumbnail-center" href="#"><img class="image" src="http://s11.postimg.org/41f57e7jn/whopper.png"/> </a>'+ingredients;
    outer += '</div><div class="item item-divider"></div></div></div></div>';
    // document.getElementById("first").appendChild(out);
    document.getElementById("second").innerHTML += out; 
    document.getElementById("second").innerHTML += outer; 
   
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
