  var results;

  Template.body.helpers({
     hits: function(){
      return MyHits.find();
	 }
    });


  Template.body.events({
    'submit form': function (event) {
      event.preventDefault();
       Meteor.call('removeAllHits');
      var loc = event.target.userSearch.value;

    
   //////make http request for data based on input//
   HTTP.call( 'GET', 'https://api.foursquare.com/v2/venues/search', {
  params: {
    "client_id": "A5UA3LYLAL1V0EZ1EPAVSP5M2RV2GKWIE05VOIB2PSN2Z0KT",
    "client_secret": "FTIBM0VRK3VTH22HZG5DUDTVZR13N3FI05Z1VFNN25PM3LXU",
    "v": "20130815",
    "near": loc,
    "query": "bar"
  }
}, function( error, response ) {
  if ( error ) {
    console.log( error );
  } else {
    //results = response.data.response.venues;
   // alert(results[0].name);
	/////////////////////////////////////////////////////////////////////////////////
	//jonathan 10/7//i hope dis works //
	 _.each(response.data.response.venues, function(place) {  
	 
	 var placename= place.name;
		var ID= place.id;
		var url= place.url;

    HTTP.call( 'GET', 'https://api.foursquare.com/v2/venues/'+ID+'/photos', {
      params: {
        "client_id": "A5UA3LYLAL1V0EZ1EPAVSP5M2RV2GKWIE05VOIB2PSN2Z0KT",
        "client_secret": "FTIBM0VRK3VTH22HZG5DUDTVZR13N3FI05Z1VFNN25PM3LXU",
        "v": "20130815",
        }
      }, function( error, response ) {
        if ( error ) {
          console.log( error );
          } else {
            var prefix = response.data.response.photos.items[0].prefix;
            var suffix = response.data.response.photos.items[0].suffix;

            var eachplace={
              venueId: ID,
              name: placename,
              link: url,
              photolink: prefix + "300x300" + suffix
              };
              MyHits.insert(eachplace);
              }
              });
    });
	 

	
	
	//////////////////////////////////////////////////////////////////////////////////////

 //   _.each(response.data.response.venues, function(place) {
//      Locations.insert(place);
 //   });

    event.target.userSearch.value = "";
  }
});
	  
    }
  });
  