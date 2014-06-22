'use strict';
Parse.initialize('9FROBMPXAABxeBZaG0K7j8wlnPtaM5sFYJLeXE9B', 'blDjPSaVIg7SK7jfGk9v1tMDQXXiheID6tgwFgRH');
//////////////////////////////
// Instances
//////////////////////////////
var detailInstance;
var photoGallery = new PhotoCollection();
var starterView = new AppView();

$('.submit-photo').click(function() {
	var fileName = $('.file-name').val();
	var photo = new Photo();
	
	var fileUploadControl = $('.image-upload')[0];
	if (fileUploadControl.files.length > 0) {
		var file = fileUploadControl.files[0];
		var name = fileName +'.jpg';
		var parseFile = new Parse.File(name, file);
		var captionValue = $('.photo-uploader').val();
	}
				// then == done
	parseFile.save().then(function() {
	// The file has been saved to Parse.
	   // alert('New object created with objectId: ' + photo.id);
		photo = new Parse.Object('Photo');
		photo.set('description', captionValue);
		// Parsewill delete over time
		photo.set('photoRef', parseFile);
		photo.set('photoURL', parseFile.url());
		photo.save().done(function(){
			photoGallery.add(photo);
		});

	}, function(error) {
	// The file either could not be read, or could not be saved to Parse.
	    alert('Failed to create new object, with error code: ' + error.description);
	});
});

