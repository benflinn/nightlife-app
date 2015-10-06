
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
	  
	 //////make http request for data based on input//
	  
    }
  });


