Template.hit.events({
	'click .attend': function(){
		var hitID= $(event.currentTarget).parent('.hit').data('id');
		var count= $(event.currentTarget).parent('.hit').attendance;
		var increase=count+1;
		////somehow we'll get attendance as part of the hit.html dom or something///
	    
	    if(Meteor.userId()){
		Locations.update(
		  {_id: hitID},
	      {$inc: {attendance: 1}}
		  )
		// eventually we will prevent attending more than once for the same user///
	     }
    }
	
});
