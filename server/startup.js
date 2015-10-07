Meteor.startup(function() {

HTTP.call( 'GET', 'https://api.foursquare.com/v2/venues/search', {
  params: {
    "client_id": "A5UA3LYLAL1V0EZ1EPAVSP5M2RV2GKWIE05VOIB2PSN2Z0KT",
    "client_secret": "FTIBM0VRK3VTH22HZG5DUDTVZR13N3FI05Z1VFNN25PM3LXU",
    "v": "20130815",
    "ll": "40.7, -74",
    "query": "sushi"
  }
}, function( error, response ) {
  if ( error ) {
    console.log( error );
  } else {

    _.each(response.data.response.venues, function(place) {
		var placename= place.name;
		var eachplace={
			name: placename
		}
      Locations.insert(eachplace);
    });

    /*
     This will return the HTTP response object that looks something like this:
     {
       content: "String of content...",
       data: [{
         "body": "The body of the post with the ID 5."
         "id": 5,
         "title": "The title of the post with the ID 5.",
         "userId": 1
       }],
       headers: {  Object containing HTTP response headers }
       statusCode: 200
     }
    */
  }
});

});