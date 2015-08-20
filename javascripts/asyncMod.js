define(["jquery", "q", "addSong"], function($, Q, addSong) {
  var deferred = Q.defer();
  return (function (list) {

    $.ajax({
    url: "https://blazing-heat-6599.firebaseio.com/songs.json",
    method: "POST",
    data: JSON.stringify(list)
    })
    .then(function(addSong){
      deferred.resolve(addSong);
      location.reload();
    })
    .fail(function(xhr, status, error){
      console.log("error", error);
    })
    .done();
  });

});