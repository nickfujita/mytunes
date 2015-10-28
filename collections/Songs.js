// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  initialize: function(){
    this.query = 'eric clapton';
  },

  model: SongModel,

  url: 'https://api.soundcloud.com/tracks',

  getSongs: function() {

    this.fetch({
      data: {
        'client_id':client_id,
        'q':this.query,
        'limit': '100'
      }
    });

  },

  parse: function(res) {
    console.log(res);
    return res.map(function(obj){
                      return {
                        url: obj.stream_url+'?client_id='+client_id,
                        title: obj.title,
                        artist: obj.user.username,
                        artwork_url: (obj.artwork_url || './files/soundcloud.jpg'),
                        likes_count: obj.likes_count,
                        playback_count: obj.playback_count,
                        favoritings_count: obj.favoritings_count,
                        description: obj.description
                      };
            });
  }

});
