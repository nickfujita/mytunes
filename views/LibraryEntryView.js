// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'div',

  className: 'col s12 m4 l3',

  // template: _.template('<td><%= artist %></td><td><%= title %></td>'),

  initialize: function() {

  },

  template: _.template('\
    <div class="card hoverable songCard">\
      <div class="card-image waves-effect waves-block waves-light">\
        <img id="artwork" src="<%- artwork_url %>"\
      </div>\
      <div class="card-content">\
        <p class="truncate"><%- title %></p>\
      </div>\
    </div>\
  '),

  events: {
    'click .songCard': function() {
      this.model.enqueue(); // Enqueue a song when clicked
    }
    // ,
    // 'mouseover .scroll_on_hover': function(e) {
    //   console.log(e);
    //   $('.scroll_on_hover').removeClass("truncate");
    //   var maxscroll = $('.scroll_on_hover').width();
    //   var speed = maxscroll * 15;
    //   $('.scroll_on_hover').animate({
    //       scrollLeft: maxscroll
    //   }, speed, "linear");
    // }
  },

  render: function(){
    this.$el.append(this.template(this.model.attributes));

    return this.el;
  }

});
