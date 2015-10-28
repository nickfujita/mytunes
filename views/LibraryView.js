// LibraryView.js - Defines a backbone view class for the music library.
var LibraryView = Backbone.View.extend({

  tagName: "div",

  className: "bordered highlight library",

  initialize: function() {
    this.render();
    this.listenTo(this.collection,'sync',this.render);
    // this.listenTo(this, 'libraryRendered', function() {
    //   $(".scroll_on_hover").mouseover(function() {
    //     console.log('mouseover');
    //     // debugger;
    //     // $(this).removeClass("truncate");
    //     // $(this).addClass("other");
    //     var maxscroll = $(this).width();
    //     var speed = maxscroll * 15;
    //     $(this).animate({
    //       scrollLeft: maxscroll
    //     }, speed, "linear");
    //   });
    //   $(".scroll_on_hover").mouseout(function() {
    //     $(this).stop();
    //     // $(this).removeClass("other");
    //     // $(this).addClass("truncate");
    //     $(this).animate({
    //       scrollLeft: 0
    //     }, 'slow');
    //   });
    // });
  },

  render: function() {
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/

    this.$el.children().detach();

    // this.$el.html('<thead><tr><th data-field="id">Artist</th><th data-field="name">Song</th></tr></thead>').append(
    this.$el.append(
      this.collection.map(function(song) {
        return new LibraryEntryView({model: song}).render();
      })
    );

    // this.trigger('libraryRendered');

  }

  });
