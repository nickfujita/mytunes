
var PlayerView = Backbone.View.extend({

  el: '<audio controls autoplay />',

  events: {

    'ended' : function() {
      this.model.ended();
    }

  },

  setSong: function(song) {

    this.model = song;

    this.render();
  },

  render: function() {

    return this.$el.attr('src', this.model ? this.model.get('url') : '');
    
  }

});
