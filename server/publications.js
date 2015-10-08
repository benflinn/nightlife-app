
Meteor.publish('attendances', function(){
	return Attendances.find();
})

Meteor.publish('myHits', function(){
	
	return MyHits.find();
})