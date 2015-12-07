Template.results.helpers({

  // onload: function() {

  //   item: [{name: "Martina"}, {name: "Lugo"}, {name: "Alice"}];

  // }
    
});


// Template.results.onRendered( function() {
//   this.currentTab = new ReactiveVar('edible');
// });


Template.results.rendered = function () {

  alert(result);
  
  document.getElementById("edible").className +="active";
  document.getElementById("e").style.display ='inline';
  document.getElementById("n").style.display ='none';

  // item: [{name: array[0]}, {name: array[1]}, {name: "Alice"}];

  // alert(result["data"].edible.items[0].name);
  //   var array = [];

  //   for(i=0;i< result["data"].edible.items.size; i++)
  //   {
  //     array.push(result["data"].edible.items[0].name);
  //   // results["ingredients"]= result["data"].edible.items[i].ingredients; 
  //   }  
  //     alert(array.size);
};      

  //   item: function() {

  //     var array = [];

  //     for(i=0;i< result["data"].edible.items.size; i++)
  //     {
  //       array.push(result["data"].edible.items[0].name);
  //     // results["ingredients"]= result["data"].edible.items[i].ingredients; 
  //     }  
  //       alert(array.size);
  //     var tab = Template.instance().currentTab;
  //     var results = {
  //       "name": array[0]
  //       // "ingredients": result["data"].edible.items[0].name
  //     };


  //     // return { contentType: tab, items: data[ tab ] };
  // }  


 
  


//   var current = Router.current().location.get().path;
//   // alert(current);
//   if(href === current){
//      //Session.set('results.current', href);
//   }


Template.results.helpers({

  //   $items.each(function() {
  //     obj[this.id] = $(this).val();
  // })

  // var json= JSON.stringify( obj);



  edible: [{name: "Bob", ingredients: "Soy"}, {name: "Frank", ingredients: "Lava"}, {name: "Alice", ingredients: "Meat"}],

  notedible: [{name: "Nada",ingredients: "ele"}, {name: "hola", ingredients: "WW"}, {name: "zero", ingredients: "Meat"}],

  // component: [{ingredients: "Soy"}, {ingredients: "Meat"}, {ingredients: "Lava"}]

  // item: function() {

  //   var array = [];

  //   for(i=0;i< result["data"].edible.items.size; i++)
  //   {
  //   array.push(result["data"].edible.items[0].name);
  //   // results["ingredients"]= result["data"].edible.items[i].ingredients; 
  //   }  
  //     alert(array.size);
  //   var tab = Template.instance().currentTab;
  //   var results = {
  //     "name": array[0]
  //     // "ingredients": result["data"].edible.items[0].name
  //   };


  //   // return {items};
  // }
});

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

// Template.results.events({
// 'click': function(event){

//     var overlay_one = document.getElementById("overlay_one");
//     var overlay_two = document.getElementById("overlay_two");
//     if(overlay_one.style.display == 'block')
//     {
//       if(event.target.id !="popup_one")
//       { 
//           overlay_one.style.display = 'none'; 
//           popup.style.display = 'none';
       
//       }
//     }
//     else if(overlay_two.style.display == "block")  
//     {
//       if(event.target.id !="popup_two" )
//       { 
//           overlay_two.style.display = 'none'; 
//           popup_two.style.display = 'none';
        
//       }
//     }  

//   }
    
// });