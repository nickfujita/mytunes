// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  className: 'container',

  initialize: function(params) {
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    this.songQueueView = new SongQueueView({collection: this.model.get('songQueue')});
    this.libraryView = new LibraryView({collection: this.model.get('library')});

    // change:currentSong - this is Backbone's way of allowing you to filter events to
    // ONLY receive change events for the specific property, 'currentSong'
    this.model.on('change:currentSong', function(model) {
      if(model.get('currentSong')) {
        this.playerView.setSong(model.get('currentSong'));
      }
    }, this);

    // Listen for changes to the song queue and update the song queue view
    this.model.get('songQueue').on('add remove', function(model) {
      if(model.get('url')!==undefined) {
        this.songQueueView.render();
      }
    },this);

    // this.model.get('library').on('sync', function() {
    //   console.log('trying to render ');
    //   console.log(this.model.get('library'));
    //   this.render();}
    //   , this);
    
  },

  render: function() {

    var library = $('<div class="library col m10 s12"></div>').append($('<h4>Library</h4>'),this.libraryView.$el);
    
    var player = $('<footer class="page-footer white container"></footer>').append(this.playerView.$el);

    var queue = $('<div class="queue col m2 s12"></div>').append($('<h4>Playlist</h4>'),this.songQueueView.$el);

    //var playerQueue = $('<div class="playerQueue col m4 s12">').append(player,$('<h5>Playlist</h5>'),queue);

    var row = $('<div class="row"></div>').append(player,queue,library);

    return this.$el.html(row);
  }

});


// <footer class="page-footer grey container"></footer>





