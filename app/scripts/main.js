Parse.initialize('9FROBMPXAABxeBZaG0K7j8wlnPtaM5sFYJLeXE9B', 'blDjPSaVIg7SK7jfGk9v1tMDQXXiheID6tgwFgRH');

var Photo = Parse.Object.extend({
	className: 'Photo'
});


//////////////////////////////
// Thumbnail View
//////////////////////////////

/*var PhotoView = Parse.View.extend({
	template: _.template($('.thumbnails-display-template').text()),

	className: 'image-holder',

	initialize: function() {
		$('.photo-container').append(this.el);
		this.render();
	},

	render: function(){
		var renderedTemplate = this.template(this.model.attributes)
    // empty div // html render the variable above
		this.$el.html(renderedTemplate);
	}
});*/

//////////////////////////////
// Detail View
//////////////////////////////

var DetailView = Parse.View.extend({
	template: _.template($('.detail-display-template').text()),
	className: 'main-image-holder', 
		
	initialize: function() {
		retrieve();
	},

	// render: function(){
	// 	var renderedTemplate = this.template(this.model.attributes)
 //    // empty div // html render the variable above
	// 	this.$el.html(renderedTemplate);
	// },
})

function retrieve() {
	var Photo = Parse.Object.extend("Photo");
	console.log(Photo);
	debugger
	var query = new Parse.Query(Photo);
	query.descending('createdAt');
	query.limit(25);
	query.find({
		success: function (results) {
		alert("Successfully retrieved " + results.length + ".");
			var templateFunction =  _.template($('.image-display-template').text());
			_.each(results, function (photoModel){
				console.log('photoModel is', photoModel)
				$('.photo-container').append(templateFunction(photoModel.attributes))
			})
		},
		error: function(error) {
		alert("Error: " + error.code + " " + error.message);
		}
	});
}


//////////////////////////////
// Instances
//////////////////////////////

// var thumbnailView = new PhotoView();
// var mainImageView = new DetailView();

var photo = new Photo();

var inputValue;

$('.submit-photo').click(function() {

	var fileUploadControl = $('.profilePhotoFileUpload')[0];
	console.log(fileUploadControl.files.length);
	if (fileUploadControl.files.length > 0) {
		var file = fileUploadControl.files[0];
		var name = 'photo.jpg';
		var parseFile = new Parse.File(name, file);
		var captionValue = $('.photo-uploader').val();
	}
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
