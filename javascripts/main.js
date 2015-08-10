
requirejs.config({
  baseUrl: './javascripts',
  paths: {
    'jquery': '../bower_components/jquery/dist/jquery.min',
    'hbs': '../bower_components/require-handlebars-plugin/hbs',
    'bootstrap': '../bower_components/bootstrap/dist/js/bootstrap.min',
    'firebase': '../bower_components/firebase/firebase',
    'lodash': '../bower_components/lodash/lodash.min'
  },
  shim: {
    'bootstrap': ['jquery'],
    'firebase': {
      exports: 'Firebase'
    }
  }
});

requirejs(["jquery", "lodash", "hbs", "bootstrap", "dom-access",  "addSong", "filterSong", "firebase"], 
  function($, _, Handlebars, bootstrap, dom, addSong, filterSong, _firebase) {
  
  var myFirebaseRef = new Firebase("https://blazing-heat-6599.firebaseio.com/");
  myFirebaseRef.on("value", function(snapshot) {
    var songs = snapshot.val();
    music(songs);
console.log(songs);



  });



// var uniqueArtists = _.chain(allSongsArray)
//                     .unique("artist")
//                     .pluck("artist")
//                     .val();
// console.log(uniqueArtists);

  $("#main").on("click",".delButton", function() {
    $(this).closest("div").remove();
  });
});

function music(songs){
  require(['hbs!../templates/songs', 'hbs!../templates/artist', 'hbs!../templates/album' ], 
    function(songTemplate, artistTemplate, albumTemplate) {
      $("#artist").append(artistTemplate(songs));
      $("#album").append(albumTemplate(songs));
      $("#main").append(songTemplate(songs));
  });
}




