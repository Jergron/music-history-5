define(["jquery"],function($) {
  return {
    querySongs: function (callback){
      $.ajax({
        url:"https://blazing-heat-6599.firebaseio.com/.json"
      }).done(function (data) {
        callback.call(this, data);
      });
    }
  };
});

