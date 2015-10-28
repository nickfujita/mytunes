// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({

  tagName: 'li',

  className: '',

  // template: _.template('\
  //     <div class="collapsible-header"><div class="row queuedSong"><div class="truncate col s9"><%= title %></div><div class="col s1 offset-s1"><i class="closeIconBox material-icons right small">close</i></div></div></div>\
  //     <div class="collapsible-body card"><div class="card-image"><img src="<%- artwork_url %>"/></div></div>\
  //     '),

  template: _.template('<td><%= artist %></td><td><%= title %></td>'),

  events: {
    'click': function() {
      this.model.dequeue(); // dequeue a song when clicked
    }
  },

  render: function(){
    this.$el.append(this.template(this.model.attributes));

    return this.el;
  }

});