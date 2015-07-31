define(function myData(a, b) {
  var songs = [];

  return {
    querySongs: function (){
        $.ajax({
          url:"/data/list.json",
          // async: false
        }).done(function(data) {
          songs = data.songs;
          myData.call(this, songs);
      });
    },
    setSongs: function () {
      return songs;
    }
  };
});

