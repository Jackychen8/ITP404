angular
  .module('itunes')
  .controller('SongsSearchController', function(iTunes, $location) {//[$location,
    var vm = this;
    vm.previousSearches = [];

    vm.search = function() {
      console.log('searching...', vm.artistSearch);
      console.log('Album Button:', vm.Albums);
      console.log('Concert Button:', vm.Concerts);

      if(vm.Albums == 1){
        vm.Concerts == 0;
      }//else{vm.Concerts == 1}

      vm.loading = true;
      vm.notFound = false;
      vm.previousSearches.push(vm.artistSearch);

      iTunes.search(vm.artistSearch).then(function(song) {
        if(song){
          vm.artistId = song.artistId;
          vm.artistName = song.artistName;
          vm.song = song;
          vm.loading = false;
          vm.notFound = false;
          vm.artistSearch = '';

          if(vm.Concerts == 1){
            $location.path('/concerts/' + song.artistName);
          }else{
            $location.path('/artists/' + song.artistId);
          }
        }else{
          console.log('Entry not found.');
          vm.loading = false;
          vm.notFound = true;
        }
      });
    };
});//]
