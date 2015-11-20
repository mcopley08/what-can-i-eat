Template.results.helpers({
  restaurantName: "Burger King"
});


// Template.results.onRendered( function() {
//   this.currentTab = new ReactiveVar('edible');
// });


Template.results.rendered = function () {
  document.getElementById("edible").className +="active";
  document.getElementById("e").style.display ='inline';
  document.getElementById("n").style.display ='none';
  // document.getElementById("main").innerHTML= '<iframe class="row"src="edible.html" id="page" style="top:100px;"></iframe>';//<h1 style="top:100px;">hol</h1>'; //'<object type="text/html" data="edible.html"></object>';

//   var current = Router.current().location.get().path;
//   // alert(current);
//   if(href === current){
//      //Session.set('results.current', href);
//   }
};

// Template.results.helpers({
//   tab: function() {
//   	// return "edible";
//     // return Template.instance();
//     // return Template.instance().currentTab.get();
//   },
//   tabData: function() {
//     var tab = Template.instance().currentTab;
//     var data = {
//       "edible": [
//         { "name": "Chicken Nuggets-10pc", "ingredients":"preservatives, chicken meat, and apple puree" },
//         { "name": "Whole Wheat Bun", "ingredients": "grains and pretzels"}               
//       ],
//       "not-edible": [
//         { "name": "Whopper Sandwich", "ingredients": "grains, pretzels, lactose, and soybean oil"}
//       ]
//     };

//     return data[ tab ];
//     // return { contentType: tab, items: data[ tab ] };
//   }
// });

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
    if(button =="eat")
    {
      var overlay = document.getElementById("overlay_one");
      overlay.style = 'display: block; position: absolute; top: 0; bottom: 0; background: #fff; width: 100%; height: 100%; opacity: 0.8; z-index: 100';
      var button = document.getElementById("button");
      var popup = document.getElementById("popup_one");
      popup.style.display = 'block';  
      var closePopup = document.getElementById("popupclose_one");
        closePopup.onclick = function() {
          overlay.style = 'display: none; position: absolute; top: 0; bottom: 0; background: #999; width: 100%; height: 100%; opacity: 0.8; z-index: 100';
          popup.style.display = 'none';
      };
    }  
    if(button =="not")
    {
        var overlay = document.getElementById("overlay_two");
        overlay.style = 'display: block; position: absolute; top: 0; bottom: 0; background: #fff; width: 100%; height: 100%; opacity: 0.8; z-index: 100';
        var popup = document.getElementById("popup_two");
        popup.style.display = 'block';
        var closePopup = document.getElementById("popupclose_two");
        closePopup.onclick = function() {
        overlay.style = 'display: none'; 
        popup.style.display = 'none';
        };
    }  
  }
    
});



