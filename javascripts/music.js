/*
var songs = [];
var revision = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

songs.unshift("Love Is A Losing Game > by Amy Winehouse on the album Back to Black");
songs.push("Ice Princess > by Azealia Banks on the album Broke With Expensive Taste");

for (var i = 0; i <= songs.length; i++) {
    revision[i] = 
      songs[i].replace(">", "</p><p>")
      .replace("*", "")
      .replace("@", "")
      .replace("(", "")
      .replace("!", "")
      .replace("by", "")
      .replace("on the album", "|")
    var music = document.getElementById("main2");
    music.innerHTML += "<div class='java-styling'><p id='title'>" + revision[i] + "</p></div>";
}
*/

$(document).ready(function() {
  $.ajax({
    url:"list.json"
  }).done(function(data) {
    
    for (i = 0; i < data.songs.length; i++) {
      var albumInfo = "<div class='java-styling'>"; 
        albumInfo += "<h2>" + data.songs[i].title + "</h2>"; 
        albumInfo += data.songs[i].artist; 
        albumInfo += " | "; 
        albumInfo += data.songs[i].album;
        albumInfo += "<p><button class='delButton'>" + "Delete" + "</button></p>";
        albumInfo += "</div>"; 
      
      var contentDivEl = $("#main2");
      contentDivEl.append(albumInfo);
        console.log(data);
  
        }
      $(".delButton").click( function() {
        $(this).closest("div").remove();
    });
    $("#main2").append("<p><button id='mainButton'><strong>More</strong></button></p>");
   });
});

$("#main2").on("click","#mainButton", function () {
  $(document).ready(function() {
    $.ajax({
      url:"list2.json"
    }).done(function(data) {
      
      for (i = 0; i < data.songs.length; i++) {
        var albumInfo = "<div class='java-styling'>"; 
          albumInfo += "<h2>" + data.songs[i].title + "</h2>"; 
          albumInfo += data.songs[i].artist; 
          albumInfo += " | "; 
          albumInfo += data.songs[i].album;
          albumInfo += "<p><button class='delButton'>" + "Delete" + "</button></p>";
          albumInfo += "</div>"; 
        
        var contentDivEl = $("#mainButton");
        contentDivEl.before(albumInfo);
          console.log(data);
    
          }
        $(".delButton").click( function() {
          $(this).closest("div").remove();
      });
     });
  });
});