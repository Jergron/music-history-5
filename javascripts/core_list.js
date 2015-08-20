define(function(require) {
var $ = require("jquery");
var auth = require("authentication");
var getSongs = require("get-songs");
var getMoresongs = require ("get-more-songs");

var myFirebaseRef = new Firebase("https://blazing-heat-6599.firebaseio.com/");

  var currentUser = auth.getUid();

  myFirebaseRef.child("songs").orderByChild("uid").equalTo(currentUser).on("value", function(snapshot) {
    
    var songs = snapshot.val();
    music(songs);
    
    $(".songInfo").on("click", function() {
      $(this).find("span").removeClass("hidden");
      console.log("click");
    });

    var first_list_of_songs = getSongs();  
    var all_songs = [];

    first_list_of_songs
      .then(function(first_songs) {
        for (var i = 0; i < first_songs.songs.length; i++) {
          var tunes = all_songs.push(first_songs.songs[i]);
          console.log("tunes", tunes);
        }
        return getMoreSongs();
     })
      .then(function(second_songs) {
        for (var i = 0; i < second_songs.songs.length; i++) {
          var tunes2 = all_songs.push(second_songs.songs[i]);
          console.log("tunes2", tunes2);
        }
      })
      .fail(function(xhr, status, error){
        console.log("error", error);
      })
      .done(function() {
        console.log("all_songs", all_songs);
      });
    
  });

  $("#main").on("click",".delButton", function() {
    $(this).closest("div").remove();
  });

  $('#submitArtist').click(function(e) {
    e.preventDefault();
      console.log("click");
      var searchArtist = $("#submitArtist").val();
      console.log("searchArtist", searchArtist);
      $("#submitArtist").val("");
      search.searchArtist(searchArtist);
    });
});

function music(songs) {
  require(['hbs!../templates/songs', 'hbs!../templates/artist', 'hbs!../templates/album' ], 
    function(songTemplate, artistTemplate, albumTemplate) {
      $("#artist").append(artistTemplate(songs));
      $("#album").append(albumTemplate(songs));
      $("#main").append(songTemplate(songs));
  });
}