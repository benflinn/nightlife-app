Meteor.startup(function() {
//start timer in morn
//Meteor.setInterval(function(){Attendances.remove({})}, 86400000 )	


return Meteor.methods({
	
	removeHits: function(location){
		if(Meteor.userId()){
			var thisUser= Meteor.userId();
		return Hits.remove({userId: thisUser});
		}
		
	    else if(Hits.find({temp: location}).count()>2){
			return Hits.remove({temp: location});
			}
	  }
})

});