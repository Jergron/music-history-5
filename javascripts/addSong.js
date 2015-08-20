define(["jquery", "asyncMod", "authentication"], function($, asyncMod, auth){
  $(document).ready(function() {
    $( "#addSong" ).click(function() {
      var list = {
        "album": {
          "genre":$("#albumGenre").val(),
          "name":$("#albumName").val(),
          "year":$("#albumYear").val()
        }, 
        "artist": $("#artistName").val(), 
        "title": $("#songTitle").val(),
        "uid": auth.getUid()
      };
    asyncMod(list);
    });
  });
});

