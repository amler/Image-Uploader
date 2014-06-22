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

	// events: {
	// 	'click'
	// }
		
	initialize: function() {
		$('.image-detail').append(this.el);
		this.render();
		// console.log('This is the DetailView'); <= Tip from Joe to add to confirm.
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
		photoGallery.on('add', function(pic) {
			//console.log('I am the on method')
			new PhotoView({model: pic})
		});

		photoGallery.fetch({
			add: true,
			success: function (results) {
				/*console.log('This is the results', results);
				console.log('Successfully retrieved ' + results.length + '.');*/
				detailInstance = new DetailView({model: photoGallery.first()});
			},
			error: function(error) {
				alert('Error: ' + error.code + ' ' + error.message);
			}
		})
	}
});
