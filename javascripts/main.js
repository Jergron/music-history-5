
requirejs.config({
  baseUrl: './javascripts',
  paths: {
    'jquery': '../bower_components/jquery/dist/jquery.min',
    'hbs': '../bower_components/require-handlebars-plugin/hbs',
    'bootstrap': '../bower_components/bootstrap/dist/js/bootstrap.min'
  },
  shim: {
    'bootstrap': ['jquery']
  }
});
/* requirejs is passing the named JS files as arguments 
calling back their methods from inside another function into the main.js file. */ 
requirejs(["jquery", "hbs", "bootstrap", "dom-access", "populate-songs", "get-more-songs"], 
  function($, Handlebars, bootstrap, dom, populate, get) {
  
// Callingback information from it's file. 
    populate.querySongs(function (songs){
      music(songs);
      fullList(songs);
    });

    $("#main").on("click",".delButton", function() {
      $(this).closest("div").remove();
    });
    $("#main").on("click","#mainButton", function () {
      get.querySongs(function (songs){
        require(['hbs!../templates/songs'], 
        function(songTemplate, artistTemplate, albumTemplate) {
        $("#mainButton").before(songTemplate(songs));
      });
    });
  });
  function fullList(songs){
    get.querySongs(function (songs){
      require(['hbs!../templates/artist', 'hbs!../templates/album'], 
      function(artistTemplate, albumTemplate) {
        $("#artist").append(artistTemplate(songs));
        $("#album").append(albumTemplate(songs));
      });
    });
  }
  $(".matchheight").matchHeight();
});

function music(songs){
  require(['hbs!../templates/songs', 'hbs!../templates/artist', 'hbs!../templates/album' ], 
    function(songTemplate, artistTemplate, albumTemplate) {
      $("#artist").append(artistTemplate(songs));
      $("#album").append(albumTemplate(songs));
      $("#mainButton").before(songTemplate(songs));
  });
}


