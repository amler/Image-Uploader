'use strict';

//////////////////////////////
// Thumbnail View
//////////////////////////////	

var PhotoView = Parse.View.extend({
	template: _.template($('.thumbnails-display-template').text()),
	className: 'image-holder',

	events: {
		'click .thumbnail-image'	: 'showImageDetail'
	},

	initialize: function() {
		// this.model.on('change', this.render)
		$('.photo-container').append(this.el);
		this.render();
	},

	render: function(){
		var renderedTemplate = this.template(this.model.attributes);
		this.$el.html(renderedTemplate);
	},

	showImageDetail: function(){
		if (detailInstance !== null){
			detailInstance.remove();
			detailInstance = new DetailView({model: this.model});
		}
	}
});

//////////////////////////////
// Detail View
//////////////////////////////

var DetailView = Parse.View.extend({
	template: _.template($('.detail-display-template').text()),
	className: 'image-editor', 
		
	initialize: function() {
		// console.log('this is in the detailview ',photoGallery);
		photoGallery.on('add', function(model){
			console.log('an add event ', this.model);
			new PhotoView({model: model});
		});
		$('.image-detail').append(this.el);
		this.render();
		console.log('This is the DetailView');
	},

	render: function(){
		var renderedTemplate = this.template(this.model.attributes)
		this.$el.html(renderedTemplate);
	}
});

//////////////////////////////
// App View
//////////////////////////////

var AppView = Parse.View.extend({
		
	initialize: function() {
		// joe: use fetch instead of query & add a collection
		// date: ['insert-your-collection-name'].fetch({add:true}); <<<<< MISSED/DONT UNDERSTAND WHY
		photoGallery.fetch({
				add: true,
				success: function (results) {
					console.log('This is the results', results);
					console.log('Successfully retrieved ' + results.length + '.');
				},
				error: function(error) {
				alert('Error: ' + error.code + ' ' + error.message);
				}
			}).done(function(){
				photoGallery.each(function (photoModel){
					// console.log('photoModel', photoModel);
					new PhotoView({model: photoModel});	
				});
				detailInstance = new DetailView({model: photoGallery.first()});
		});
	}
});
