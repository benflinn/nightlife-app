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
	}
	
	
});
