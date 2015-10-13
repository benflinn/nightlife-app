
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
    "client_secret": "V0K3TTWFMEVVISI5NQJN3F1MFU4GKEPPXIFSS5BHY2LQIESB",
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
	 
	 var placename = place.name;
		var ID = place.id;
		var url = place.url;
		
		if(Meteor.userId()) {

		     var thisUser= Meteor.userId();

    HTTP.call('GET', 'https://api.foursquare.com/v2/venues/'+ID+'/photos', {
      params: {
        "client_id": "A5UA3LYLAL1V0EZ1EPAVSP5M2RV2GKWIE05VOIB2PSN2Z0KT",
        "client_secret": "V0K3TTWFMEVVISI5NQJN3F1MFU4GKEPPXIFSS5BHY2LQIESB",
        "v": "20130815",
        }
      }, function( error, response ) {
        if ( error ) {
          console.log(error);
          } else {
            var prefix = response.data.response.photos.items[0].prefix;
            var suffix = response.data.response.photos.items[0].suffix;

            var eachplace = {
              venueId: ID,
              name: placename,
              link: url,
              userId: thisUser,
              photolink: prefix + "300x300" + suffix
              };
              Hits.insert(eachplace);
              }
              });

} else {

  HTTP.call( 'GET', 'https://api.foursquare.com/v2/venues/'+ID+'/photos', {
      params: {
        "client_id": "A5UA3LYLAL1V0EZ1EPAVSP5M2RV2GKWIE05VOIB2PSN2Z0KT",
        "client_secret": "V0K3TTWFMEVVISI5NQJN3F1MFU4GKEPPXIFSS5BHY2LQIESB",
        "v": "20130815",
        }
      }, function( error, response ) {
        if ( error ) {
          console.log( error );
          } else {

            var prefix = response.data.response.photos.items[0].prefix;
            var suffix = response.data.response.photos.items[0].suffix;

            var thisTemp= loc;

            var eachplace={
              venueId: ID,
              name: placename,
              link: url,
              temp: thisTemp,
              photolink: prefix + "300x300" + suffix
              };
              Hits.insert(eachplace);
              Session.set("current", loc);
              }
              });
}

    });
	 



		  }
		
	
    });
	 //end of http call//
	
    event.target.userSearch.value = "";
  }
});
	  

  