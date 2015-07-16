// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },
  // enqueue function
  enqueue: function(){
    this.trigger('enqueue', this);  //being passed to AppModel on listener
  },
  // dequeue function  
  dequeue: function(){
    this.trigger('dequeue', this);
  },
  // ended function
  ended: function(){
    this.trigger('ended', this);
  }
});
