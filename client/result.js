Template.result.created = function () {
  this.data = this.data || {};
};

Template.result.rendered = function () {
  if ((this.data.class && this.data.class.indexOf('tabs-top') > -1)) {
    Session.set('hasTabsTop', true);
  } else {
    Session.set('hasTabs', true);
  }

  this.$('.tabs').children().each(function() {
    var href = $(this).attr('href');
    var current = Router.current().location.get().path;
    if(href === current){
      Session.set('ionTab.current', href);
    }
  });
};

Template.result.destroyed = function () {
  Session.set('hasTabs', false);
  Session.set('hasTabsTop', false);
};

Template.result.helpers({
  classes: function () {
    var classes = [];

    if (this.class) {
      classes.push(this.class);
    }

    if (this.style === 'android' || ( !this.style && Platform.isAndroid()) ) {
      classes.push('tabs-top tabs-striped tabs-icon-left');
    }

    if (this.style === 'ios' || ( !this.style && Platform.isIOS()) ) {
      classes.push('tabs-icon-top');
    }

    return classes.join(' ');
  }
});