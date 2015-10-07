
  var results;

  Template.body.helpers({
     hits: function(){
		 return Locations.find();
		 //this should have a filter eventually so it only returns results based 
		 //on your query in the .events below
	 }
    });


  Template.body.events({
    'submit form': function (event) {
      event.preventDefault();

      var loc = event.target.userSearch.value;
    
   //////make http request for data based on input//
   HTTP.call( 'GET', 'https://api.foursquare.com/v2/venues/search', {
  params: {
    "client_id": "A5UA3LYLAL1V0EZ1EPAVSP5M2RV2GKWIE05VOIB2PSN2Z0KT",
    "client_secret": "FTIBM0VRK3VTH22HZG5DUDTVZR13N3FI05Z1VFNN25PM3LXU",
    "v": "20130815",
    "near": loc,
    "query": "bars"
  }
}, function( error, response ) {
  if ( error ) {
    console.log( error );
  } else {
    results = response.data.response.venues;
    alert(results[0].name);

 //   _.each(response.data.response.venues, function(place) {
//      Locations.insert(place);
 //   });

    event.target.userSearch.value = "";

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
	  
    }
  });
  