// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

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

    var library = $('<div class="library col s12"></div>').append($('<h4>Library</h4>'),this.libraryView.$el);
    
    var queue = $('<div class="queue container"></div>').append(this.songQueueView.$el);

    var footer = $('<footer class="page-footer white"></footer>')

    footer.append(queue)
    footer.append(this.playerView.$el);

    // $('.collapsible').collapsible({accordion : false});
    
    // $('.collapsible').collapsible({
    //   accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    // });

    //var playerQueue = $('<div class="playerQueue col m4 s12">').append(player,$('<h5>Playlist</h5>'),queue);

    var row = $('<div class="row container"></div>').append(library);

    return this.$el.append(row,footer);
  }

});


// <footer class="page-footer grey container"></footer>





