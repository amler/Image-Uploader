var Photo = Parse.Object.extend({
	className: 'Photo'
});

// Here's a collection!
var PhotoCollection = Parse.Collection.extend({
	model: Photo
	/*initialize: function() {
			// on additions to this collection instantiate a new view 
		this.on('add', function(item) {
			new PhotoView ({
				model: item
			});
		});
	}*/
})
