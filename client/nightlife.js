  var results;
  
Session.setDefault("current", 'chicago');

  Template.body.helpers({
     hits: function(){
		 var thisUser= Meteor.userId();
		 if(thisUser){
			   return Hits.find({userId:thisUser});
		 }else{
			 var currentTempCity= Session.get("current");
			 return Hits.find({temp: currentTempCity});
		 }
	 }
    });


  Template.body.events({
    'submit form': function (event) {
      event.preventDefault();
  
      var loc = event.target.userSearch.value;
	  Meteor.call('removeHits', loc);

    
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
		
		if(Meteor.userId()){
		     var thisUser= Meteor.userId();

		    var eachplace={
			venueId: ID,
			name: placename,
			link: url,
			userId: thisUser
		     };
		     Hits.insert(eachplace);
		}
		  else{
			 var thisTemp= loc;
			 var eachplace={
				 venueId: ID,
				 name: placename,
				 link:url,
				 temp: thisTemp
			 };
			 Hits.insert(eachplace);
			 Session.set("current", loc);
		  }
		
	
    });
	 //end of http call//
	
	
	
	
	
	//////////////////////////////////////////////////////////////////////////////////////

 //   _.each(response.data.response.venues, function(place) {
//      Locations.insert(place);
 //   });

    event.target.userSearch.value = "";
  }
});
	  
    }
  });
  