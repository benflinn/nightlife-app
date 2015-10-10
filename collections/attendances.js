Attendances =new Mongo.Collection('attendances');

Attendances.allow({
	
   insert: function (userId, doc){
	   return doc.userId === userId;
   },
   remove: function (userId, doc){
	   return doc.userId === userId;
   }
})