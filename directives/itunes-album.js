angular
  .module('itunes')
  .directive('itunesAlbum', function() {//camelcase starRating1 corresponds to star-ratings1 html tag
    // DDO (directive definition object)
    return {
      restrict: 'E',//Element and Attribute, 'E' is just element and 'A' is just
      templateUrl: '/templates/directives/itunes-album.html',
      scope: {//isolate scope
        album: '='//,//same as =rating, properties
        //action: '&'//same as &action, functions
      }
    };
  });
