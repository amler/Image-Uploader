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
var canvas = new fabric.Canvas('canvas');
var fabricPhoto;

var DetailView = Parse.View.extend({
	template: _.template($('.detail-display-template').text()),
	canvasTemplate: _.template($('.canvas-editor-template').text()),
	className: 'image-editor',

	events: {
		// 'click .edit-photo'		: 'addCanvas',
		'click .add-googly-eye'	: 'addEyeImage'
	},
		
	initialize: function() {
		$('.image-detail').append(this.el);
		this.render();
		return this;
		// console.log('This is the DetailView'); <= Tip from Joe to add to confirm.
	},

	/*render: function(){
		var renderedTemplate = this.template(this.model.attributes);
		this.$el.html(renderedTemplate);
	},*/

	// addCanvas: function() {
	render: function(){
		fabricPhoto = this.model.attributes;
 		var renderedTemplate = this.canvasTemplate(this.model.attributes);
		this.$el.html(renderedTemplate);
		return this;
	},

	addEyeImage: function(){
		// console.log('This is from your addEyeImage ', fabricPhoto.photoURL)
		fabric.Image.fromURL(fabricPhoto.photoURL, function(image) {
	        image.scale(0.1);
	        canvas.add(image);
	    });
	}
});

/*fabric.Image.fromURL('http://th04.deviantart.net/fs31/PRE/i/2008/200/c/2/ScrappinCop_Big_Ole_Googly_Eye_by_debh945.png', function(image){
	var detailInstance = new DetailView();
	detailInstance.addEyeImage(image);
});

$('.add-googly-eye').click(function() {
    fabric.Image.fromURL('http://th04.deviantart.net/fs31/PRE/i/2008/200/c/2/ScrappinCop_Big_Ole_Googly_Eye_by_debh945.png', function(image) {
        image.scale(0.1);
        canvas.add(image);
    });
});*/


/*

$('.submit-text').click(function(){
    var fabricText = $('.text-canvas').val();
    var canvasText = new fabric.Text(fabricText, {
        fontFamily: 'Arial',
        fontWeight: 'bold',
        fontSize: 40,
        textBackgroundColor: 'F08'
    });
    canvas.add(canvasText);
    $('.text-canvas').val('');
});*/

//////////////////////////////
// App View
//////////////////////////////

var AppView = Parse.View.extend({
		
	initialize: function() {
		// joe: use fetch instead of query & add a collection
		// date: ['insert-your-collection-name'].fetch({add:true}); <<<<< MISSED/DONT UNDERSTAND WHY
		photoGallery.on('add', function(pic) {
			//console.log('I am the on method')
			new PhotoView({model: pic});
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
		});
	}
});
