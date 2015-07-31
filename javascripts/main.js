requirejs(["dom-access", "populate-songs", "get-more-songs"], function(dom, populate, get) {

  populate.querySongs();
  var songs = populate.setSongs();
  console.log(songs);
  for (i = 0; i < songs.length; i++) {
    var albumInfo = "<div class='java-styling'>"; 
    albumInfo += "<h2>" + songs[i].title + "</h2>"; 
    albumInfo += songs[i].artist; 
    albumInfo += " | "; 
    albumInfo += songs[i].album;
    albumInfo += "<p><button class='delButton'>Delete</button></p>";
    albumInfo += "</div>"; 
    dom.append(albumInfo);
  }
  $(".delButton").click( function() {
    $(this).closest("div").remove();
  });
  dom.append("<p><button id='mainButton'><strong>More</strong></button></p>");
  dom.on("click","#mainButton", function () {
    get.querySongs();
    var songs2 = get.setSongs();
    for (i = 0; i < songs2.length; i++) {
      var albumInfo = "<div class='java-styling'>"; 
      albumInfo += "<h2>" + songs2[i].title + "</h2>"; 
      albumInfo += songs2[i].artist; 
      albumInfo += " | "; 
      albumInfo += songs2[i].album;
      albumInfo += "<p><button class='delButton'>Delete</button></p>";
      albumInfo += "</div>";
      $("#mainButton").before(albumInfo); 
    }
    $(".delButton").click( function() {
      $(this).closest("div").remove();
    });
  });
});