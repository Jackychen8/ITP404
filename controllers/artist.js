angular
  .module('itunes')
  .controller('ArtistController', function(artist){//resolved promise
    var vm = this;
    vm.artist = artist;//artist is really albums
    vm.albums = [];
    var album = {};

    //render albums
    for(var i = 0; i < vm.artist.length; i++){
      if(vm.artist[i].wrapperType === 'collection'){
        album = vm.artist[i];
        album['notStarred'] = 1;
        vm.albums.push(album);//vm.artist[i]
      }
    }

    vm.favorites = [];
    vm.favorite = function(album){//need to grab this from artist.html
      window.localStorage[album.collectionId] = JSON.stringify(album);
      album.notStarred = 0;
      console.log('Favorited ' + album.collectionName + '\n');
      vm.favorites.push(album);
    }
  });
