Template.results.helpers({
  restaurantName: "Burger King"
});


Template.results.onRendered( function() {
  this.currentTab = new ReactiveVar("edible");
});

Template.results.helpers({
  tab: function() {
  	return "edible";
    // return Template.instance().currentTab.get();
  },
  tabData: function() {
    var tab = Template.instance().currentTab.get();

    var data = {
      "edible": [
        { "name": "Chicken Nuggets-10pc", "ingredients":"preservatives, chicken meat, and apple puree" },
        { "name": "Whole Wheat Bun", "ingredients": "grains and pretzels"}               
      ],
      "not-edible": [
        { "name": "Whopper Sandwich", "ingredients": "grains, pretzels, lactose, and soybean oil"}
      ]
    };

    return data[ tab ];
    // return { contentType: tab, items: data[ tab ] };
  }
});

Template.results.events({
  'click .nav-pills li': function( event, template ) {
    var currentTab = $( event.target ).closest( "li" );

    currentTab.addClass( "active" );
    $( ".nav-pills li" ).not( currentTab ).removeClass( "active" );

    template.currentTab.set( currentTab.data( "template" ) );
  }
});

