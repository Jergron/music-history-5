define(["jquery"],function($) {
  return {
    querySongs: function (callback){
      $.ajax({
        url:"/data/list2.json",
      }).done(function (data) {
        callback.call(this, data);
      });
    }
  };
});