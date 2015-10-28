// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  // el: '<ul class="collapsible side-nav" id="slide-out" data-collapsible="accordion"></ul>',

  tagName: 'ul',

  className: '',

  // id: 'slide-out',

  // attributes: {
  //   'data-collapsible': 'accordion'
  // },

  initialize: function() {
    this.render();
    this.listenTo(this,'songQueueUpdated', function(){
      console.log('hahahhahahhaha');
      $('.collapsible').collapsible({accordion : false});
    });
  },

  render: function() {

    this.$el.children().detach();

    this.collection.each(function(song) {
        this.$el.prepend(new SongQueueEntryView({model: song}).render());
    }.bind(this))

    // this.$el.prepend(
    //   this.collection.map(function(song) {
    //     return new SongQueueEntryView({model: song}).render();
    //   })
    // );

    // this.trigger('songQueueUpdated');
  }

});
