Template.hit.events({
	'click .attend': function(){
		
		var hitID= this.venueId;
		var thisUser=Meteor.userId();
	    
	    if(Meteor.userId() && Attendances.find({userId: thisUser, venueId: hitID}).count()===0){

		Attendances.insert({venueId: hitID, userId: thisUser});
		
	     }else if(Meteor.userId() && Attendances.find({userId: thisUser, venueId: hitID}).count()>0){
			 Attendances.remove({_id: Attendances.findOne({venueId: hitID, userId: thisUser})._id});
		 }
    }
	
});

Template.hit.helpers({
	
	attendance: function(){
		return Attendances.find({venueId: this.venueId}).count();
	},

	photo: function() {
		return this.photolink;
		}
		
		});


/*

HTTP.call( 'GET', 'https://api.foursquare.com/v2/venues/'+this.venueId+'/photos', {
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
						}
						return prefix + "300x300" + suffix;
					});

					*/