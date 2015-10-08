  var results;

  Template.body.helpers({
     hits: function(){
<<<<<<< HEAD
		 return MyHits.find();
=======
		 return Session.get('barnames');
>>>>>>> master
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
		var ID= place._id;
		var url= place.url;

		var eachplace={
			venueId: ID,
			name: placename,
			link: url
		};
		  MyHits.insert(eachplace);
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
  