Meteor.startup(function() {



	return Meteor.methods({

		removeHits: function(location) {
			if (Meteor.userId()) {
				var thisUser = Meteor.userId();
				return Hits.remove({
					userId: thisUser
				});
			} else if (Hits.find({
					temp: location
				}).count() > 0) {
				return Hits.remove({
					_id: Hits.findOne({
						temp: location
					})._id
				});
			}
		}
	})

});