'use strict';
Parse.initialize('9FROBMPXAABxeBZaG0K7j8wlnPtaM5sFYJLeXE9B', 'blDjPSaVIg7SK7jfGk9v1tMDQXXiheID6tgwFgRH');
//////////////////////////////
// Instances
//////////////////////////////
var detailInstance;
var photoGallery = new PhotoCollection();
var starterView = new AppView();

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
	// console.log(parseFile);
	photo.save();
});

///////////////////////////////////////
/// references
///////////////////////////////////////
// return to this later.
// http://stackoverflow.com/questions/15291413/backbone-js-master-detail-view-navigation-issue-jsfiddle-included
