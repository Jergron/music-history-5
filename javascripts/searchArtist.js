define(["jquery"], function($) {

  return {


    getArtist: function(artist) {
      
      $.ajax({
        url: "http://ws.spotify.com/search/1/artist?q=" + artist,
        })
        .done(function(artist) {
            console.log("artist", artist);


            require(['hbs!../templates/songs'],
            function(songsTemplate) {
              $("#main").html(songsTemplate(artist.Search));
            });
          });
    }
  };
});