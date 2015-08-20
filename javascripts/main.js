
requirejs.config({
  baseUrl: './javascripts',
  paths: {
    'jquery': '../bower_components/jquery/dist/jquery.min',
    'hbs': '../bower_components/require-handlebars-plugin/hbs',
    'bootstrap': '../bower_components/bootstrap/dist/js/bootstrap.min',
    'firebase': '../bower_components/firebase/firebase',
    'lodash': '../bower_components/lodash/lodash.min',
    'q': '../bower_components/q/q'
  },
  shim: {
    'bootstrap': ['jquery'],
    'firebase': {
      exports: 'Firebase'
    }
  }
});

requirejs(["jquery", "lodash", "hbs", "bootstrap", "dom-access",  "addSong", "filterSong", "firebase", "q", "get-songs", "get-more-songs", "searchArtist", "authentication"], 
  function($, _, Handlebars, bootstrap, dom, addSong, filterSong, _firebase, q, getSongs, getMoreSongs, search, auth) {

  var ref = new Firebase("https://blazing-heat-6599.firebaseio.com");
  var authData = ref.getAuth();
  console.log("authData", authData);

  if(authData === null) {
    ref.authWithOAuthPopup("github", function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        console.log("Authenticated successfully with payload:", authData);
        auth.setUid(authData.uid);
        require(["core_list"], function() {});
      }
    });

  } else {
        console.log("Authenticated successfully with payload:", authData);
        auth.setUid(authData.uid);
        require(["core_list"], function() {});
      } 
});





