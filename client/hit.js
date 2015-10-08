Template.hit.events({
	'click .attend': function(){
		
		var hitID= $(event.currentTarget).parent('.hit').data('id');
		var thisUser=Meteor.userId();
	    
	    if(Meteor.userId() && Attendances.find({userId: thisUser, venueId: hitID}).count()===0){
		Attendances.insert({venueId: hitID, userId: thisUser});
		
	     }else if(Meteor.userId() && Attendances.find({userId: thisUser, venueId: hitID}).count()>0){
			 Attendances.remove({venueId: hitID, userId: thisUser})
		 }
    }
	
});

Template.hit.helpers({
	
	attendance: function(){
		return Attendances.find({venueId: this._id}).count();
	}
	
	
});