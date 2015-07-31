define(function myData() {
  var songs = [];

  return {
    querySongs: function (){
        $.ajax({
          url:"/data/list2.json",
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