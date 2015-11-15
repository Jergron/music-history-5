
requirejs.config({
  baseUrl: './javascripts',
  paths: {
    'jquery': '../bower_components/jquery/dist/jquery.min',
    'hbs': '../bower_components/require-handlebars-plugin/hbs',
    'bootstrap': '../bower_components/bootstrap/dist/js/bootstrap.min',
    'firebase': '../bower_components/firebase/firebase',
    'lodash': '../bower_components/lodash/lodash.min',
    'q': '../bower_components/q/q',
    'es6':'../bower_components/requirejs-babel/es6',
    'babel':'../bower_components/requirejs-babel/babel-5.8.22.min'

  },
  shim: {
    'bootstrap': ['jquery'],
    'firebase': {
      exports: 'Firebase'
    }
  }
});

requirejs(["jquery", "lodash", "hbs", "bootstrap", "dom-access",  "addSong", "es6!filterSong", "firebase", "q", "get-songs", "get-more-songs", "searchArtist", "authentication"], 
  function($, _, Handlebars, bootstrap, dom, addSong, filterSong, _firebase, q, getSongs, getMoreSongs, search, auth) {
  var ref = new Firebase("https://blazing-heat-6599.firebaseio.com");
  var authData = ref.getAuth();
  console.log("authData", authData);

  $("#login").on("click", function() {
    console.log("authData", authData);
    ref.authWithOAuthPopup("github", function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } 
      else {
        console.log("Authenticated successfully with payload:", authData);
        $(location).attr('href', 'http://localhost:8081/index.html');
      }
    });
  });
  
  auth.setUid(authData.uid);
  require(["core_list"], function() {});
  filterSong();

  $("#logOut").on("click", function() {
    ref.unauth();
    $(location).attr('href', 'http://localhost:8081/login.html');
  });
});





