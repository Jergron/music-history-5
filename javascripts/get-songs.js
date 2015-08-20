define(["jquery", "q"], function($, Q) {
  var deferred = Q.defer();
  return function () {

    $.ajax({
      url: "/data/list.json"
    })
    .done(function(songs_data) {
      deferred.resolve(songs_data);
    })
    .fail(function(xhr, status, error){
      deferred.reject(error);
    });

    return deferred.promise;
  };

});