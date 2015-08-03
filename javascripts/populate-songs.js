define(function () {
  return {
    querySongs: function (callback){
      $.ajax({
        url:"/data/list.json"
      }).done(function (data) {
        callback.call(this, data.songs);
      });
    }
  };
});

