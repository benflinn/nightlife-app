Meteor.publish('attendances', function() {
	return Attendances.find();
})
Meteor.publish('hits', function() {
	return Hits.find();
})