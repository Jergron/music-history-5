/* requirejs is passing the named JS files as arguments 
calling back their methods from inside another function into the main.js file. */ 
requirejs(["dom-access", "populate-songs", "get-more-songs"], function(dom, populate, get) {

// Callingback information from it's file. 
  populate.querySongs(function (songs){
// Calls the for loop method inside the function to itirate through the songs 
    addSong(songs, dom);
  });
// adds the second list of songs to the main div
  $("#main2").on("click","#mainButton", function () {
    get.querySongs(function (songs){
      addSong(songs, dom);
    });
  });
});

// creates the list of songs
function addSong(songs, dom){
  for (i = 0; i < songs.length; i++) {
    var albumInfo = "<div class='js-styling'>"; 
    albumInfo += "<h2>" + songs[i].title + "</h2>"; 
    albumInfo += songs[i].artist; 
    albumInfo += " | "; 
    albumInfo += songs[i].album;
    albumInfo += "<p><button class='delButton'>Delete</button></p>";
    albumInfo += "</div>"; 
    dom.before(albumInfo);
  }
  // deletes the row the button is under
  $(".delButton").click( function() {
    $(this).closest("div").remove();
  });
};