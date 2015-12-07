angular
.module('itunes', ['ngRoute'])
.config(function($routeProvider){
  $routeProvider
    .when('/search', {
      templateUrl: '/templates/index.html',
      controller: 'SongsSearchController',
      controllerAs: 'vm'
    })
    .when('/artists/:artistId', {
      templateUrl: '/templates/artist.html',//show albums
      controller: 'ArtistController',
      controllerAs: 'vm',
      resolve: {
        artist: function($route, $http) {
          // return Artist.findRecord($route.current.params.id);
          var id = $route.current.params.artistId;
          //No Response?
          var url = 'https://itunes.apple.com/lookup?id=' + id + '&entity=album&callback=JSON_CALLBACK';
          return $http.jsonp(url).then(function(response){
            return response.data.results;//make sure you add the script tag for the new js file
          });
        }
      }
    })
    .when('/concerts/:artistName', {
      templateUrl: 'templates/concerts.html',
      controller: 'ConcertController',
      controllerAs: 'vm',
      resolve: {
        concert: function($route, $http) {
          var name = $route.current.params.artistName;
          var url = 'http://api.eventful.com/json/events/search?c=music&app_key=KG4mKH5wP2KXqZpX&page_number=1&date=Future&keywords=' +
          name + '&callback=JSON_CALLBACK';//jsonp_callback
          return $http.jsonp(url).then(function(response){
            console.log(response.data.events);
            return response.data.events;
          });
        }
      }
    })
    .otherwise({
      redirectTo: '/search'
    });
});
