Parse.initialize('9FROBMPXAABxeBZaG0K7j8wlnPtaM5sFYJLeXE9B', 'blDjPSaVIg7SK7jfGk9v1tMDQXXiheID6tgwFgRH');

//////////////////////////////
// Instances
//////////////////////////////

var photoGallery = new PhotoCollection();


$('.submit-photo').click(function() {

	var photo = new Photo();
	
	var fileUploadControl = $('.image-upload')[0];
	// console.log(fileUploadControl.files.length);
	if (fileUploadControl.files.length > 0) {
		var file = fileUploadControl.files[0];
		var name = 'photo.jpg';
		var parseFile = new Parse.File(name, file);
		var captionValue = $('.photo-uploader').val();
	}
					// done
	parseFile.save().then(function() {
	// The file has been saved to Parse.
	    alert('New object created with objectId: ' + photo.id);
	}, function(error) {
	// The file either could not be read, or could not be saved to Parse.
	    alert('Failed to create new object, with error code: ' + error.description);
	});
	photo = new Parse.Object('Photo');
	photo.set('description', captionValue);
	photo.set('photo', parseFile);
	console.log(photo);
	console.log(parseFile);
	photo.save();
});



// joe: use fetch instead of query & add a collection
// date: ["insert-your-collection-name"].fetch({add:true}); <<<<< MISSED/DONT UNDERSTAND WHY

photoGallery.fetch({
		add: true,
		success: function (results) {
			console.log('This is the results', results);
			alert("Successfully retrieved " + results.length + ".");
		},
		error: function(error) {
		alert("Error: " + error.code + " " + error.message);
		}
	}).done(function(){
		photoGallery.each(function (photoModel){
			console.log('photoModel', photoModel)
			new PhotoView({model: photoModel});
		});
});

/*function retrieve() {
	var Photo = Parse.Object.extend("Photo");
	console.log(Photo);
	debugger
	var query = new Parse.Query(Photo);
	query.descending('createdAt');
	query.limit(25);
	query.find({
		success: function (results) {
		alert("Successfully retrieved " + results.length + ".");
			_.each(results, function (photoModel){
				console.log('photoModel is', photoModel)
			})
		},
		error: function(error) {
		alert("Error: " + error.code + " " + error.message);
		}
	});
}*/

///////////////////////////////////////
/// references
///////////////////////////////////////
// return to this later.
// http://stackoverflow.com/questions/15291413/backbone-js-master-detail-view-navigation-issue-jsfiddle-included
