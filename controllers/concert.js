angular
  .module('itunes')
  .controller('ConcertController', function(concert){//resolved promise
    var vm = this;

    if(vm.concerts != 0){
      vm.concerts = concert.event;
      vm.artistName = concert.event[0].performers.performer.name;
      console.log(vm.concerts);
    }else{
      vm.noGo = 1;
    }

    //vm.albums = [];
    //var album = {};


    //render albums
    // for(var i = 0; i < vm.artist.length; i++){
    //   if(vm.artist[i].wrapperType === 'collection'){
    //     album = vm.artist[i];
    //     album['notStarred'] = 1;
    //     vm.albums.push(album);//vm.artist[i]
    //   }
    // }
  });
