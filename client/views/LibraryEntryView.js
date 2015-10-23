// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'div',

  className: 'col s6 m4 l3 songCard',

  // template: _.template('<td><%= artist %></td><td><%= title %></td>'),

  template: _.template('\
    <div class="card hoverable">\
      <div class="card-image">\
        <img src=<%- artwork_url %>\
      </div>\
      <div class="card-content truncate">\
        <%- title %>\
      </div>\
    </div>\
  '),

  events: {
    'click': function() {
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
    return this.$el.html(this.template(this.model.attributes));
  }

});
