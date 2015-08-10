define(["jquery"], function($){

//Create filter button
  $("#filterButton").on("click", function(){

    var selArtist = $("#artist option:selected").text();
    var selAlbum = $("#album option:selected").text();
    var genreList = [];
    var songList = $(".songInfo");
    
  //Gets values from checkboxes
    $('input[name="music"]:checked').map(function() {
      genreList.push($(this).val());
    });
      // console.log(genreList);

//Show song title(s) that match selected artist name, album name, and genre
    songList.each(function() {
      $(this).show();
      if(selAlbum !== $(this).attr("album") && selArtist !== $(this).attr("artist")) {
        //Hides the song titles not selected
        $(this).hide();
      } 
      //Shows the genre selected
      if(genreList.indexOf($(this).attr("genre")) !== -1) {
        $(this).show();
      }
    });
  });
});
