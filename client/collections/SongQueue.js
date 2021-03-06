// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({  //collection of songs
 
  initialize: function(){
    
    this.on('add', function(){
      if (this.length===1){
        this.playFirst();
      }
    });
    this.on('ended', function(){
      this.shift();
      if (this.length!==0){
        this.playFirst();
      }

    });
    this.on('dequeue', function(){
      this.remove();
    });

    this.on('enqueue', function(){
      
    });
  }, //end of initialize
  

  playFirst: function(){
     this.at(0).play();

  }

});