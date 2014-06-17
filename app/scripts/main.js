Parse.initialize("9FROBMPXAABxeBZaG0K7j8wlnPtaM5sFYJLeXE9B", "blDjPSaVIg7SK7jfGk9v1tMDQXXiheID6tgwFgRH");
console.log('WTF do you think you\'re trying to do here!?!');

var Photo = Parse.Object.extend({
	className: 'Photo'
});
/*
var PhotoCollection = Parse.Collection.extend({
	model: Photo;
})*/

/*var photo = new Photo();*/

/*
var inputValue;

$('.submit-photo').click(function() {
	inputValue = $('.photo-uploader').val();
	//console.log(inputValue);
	//console.log(typeof inputValue);
	photo.set('url', inputValue);

	photo.save(null, {
	  success: function(photo) {
	    // Execute any logic that should take place after the object is saved.
	    alert('New object created with objectId: ' + photo.id);
 	  },
	  error: function(photo, error) {
	    // Execute any logic that should take place if the save fails.
	    // error is a Parse.Error with an error code and description.
	    alert('Failed to create new object, with error code: ' + error.description);
	  }
	});
});
*/

$('.submit-photo').click(function() {
	var fileUploadControl = $('.profilePhotoFileUpload')[0];
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
	console.log(captionValue);
		debugger
	photo.save();

});


function retrieve(){
    var register = Parse.Object.extend("register");
    var query = new Parse.Query(register);
    var self = this;
    var email = this.$("#retrieve-email").val();
    query.equalTo("email", email);
    query.find({
    success: function(results) {
    alert("Successfully retrieved " + results.length + ".");
        imageURLs = [];  
    for (var i = 0; i < results.length; i++) {
        var object = results[i];
        var image=imageURLs.push(object.get('image'));
        //var image =results[i].get("image").url;
        if(imageURLs.length > 0){
          $('#color').attr('src', imageURLs[0]);
        }
       }
    },
  error: function(error) {
    alert("Error: " + error.code + " " + error.message);
  }
	});
}



// var PhotoView = Parse.View.extend({

// 	template: _.template($('.image-display-template').text()),
// 	//newTemplate: _.template($('.image-add-detail-template').text()),

// 	events: {
// 		'click .submit-photo'	: 'editImage'
// 	},

// 	initialize: function() {
// 		// MAYBE???? telling this view to reredner any changes to the model
// 		/*this.listenTo(photo, 'add', function(image) {
// 			new PhotoView({model: image})
// 		})*/

// 		$('.photo-container').prepend(this.el);
// 		this.render();
// 	},

// 	render: function() {
// 		/*var renderedTemplate = this.template(this.model)
// 		//console.log(this.model.attributes)
// 		this.$el.html(renderedTemplate);
// 		// Idea with render is that you should generally return this.
// 		// The reason is that you can keep chaining stuf onto render
// 		return this;*/

// 		$(this.el).html(this.template(this.model))
// 	},
// });


// var images = new PhotoView();


/*initialize: function () {
		photo.get().done(function() {
			photo.each(function (image) {
				new ThumbnailView({model: image});
			});
		});
	},*/

/*var GameScore = Parse.Object.extend("GameScore");
var query = new Parse.Query(photo);
query.find({
  success: function(results) {
    alert("Successfully retrieved " + results.length + ".");
    // Do something with the returned Parse.Object values
    for (var i = 0; i < results.length; i++) { 
      var object = results[i];
      alert(object.id + ' - ' + object.get('description'));
    }
  },
  error: function(error) {
    alert("Error: " + error.code + " " + error.message);
  }
});
*/