# nightlife-app-1
App that provides evening events

project for freecodecamp's basejumps!

jonathan 10/5:

1. server folder:
   a. bootstrap/startup.js - initializes the app with any important conditions we need,
   or this could simply start the user out with a test city's results to show them how the product works
   ?b. publications- handles publications of certain data to the user. we could handle the issue of what city's data they say here,
   or maybe just as a helper to app.js.  


2. collections folder:
a. Locations/Venues- we need a db to store the data for how many people are going to an event, and the relevant venue info.
    -and it should handle allowances for inserting, deleting, or updating the database.
	
b?. Users? - as far as I can tell, meteor comes with an inbuilt user system that i used in my first app, but if we need
   a user db it could go here

   
3. client folder:

a. app.html : our page header/footer/layout. contains login and search forms
b. app.js:
c. app.css: 
d. hit.html: a separate html template for each hit/restaurant one receives for a search, contains link for foursquare event.
e. hit.js: contains a simple counter for attendees which updates this specific hit document in the 
f. hit.css:


foursquare info:

client id:   A5UA3LYLAL1V0EZ1EPAVSP5M2RV2GKWIE05VOIB2PSN2Z0KT
 
client secret:  FTIBM0VRK3VTH22HZG5DUDTVZR13N3FI05Z1VFNN25PM3LXU

our app account: https://foursquare.com/developers/app/A5UA3LYLAL1V0EZ1EPAVSP5M2RV2GKWIE05VOIB2PSN2Z0KT

{{>loginButtons}}

locations: id, attendance
attendees: userId, locations
10/7
1. system starts up and inserts some new locations in db
2. form submit clears 1. attended venues out from the viewport but still in memory 2. 
    temporary venues out of memory altogether
    user query is used to insert a new batch. if a new location matches an attended one in the memory, 
	replace it with the attended one
3. (before or after 2) voting 














