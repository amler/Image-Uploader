var detailInstance = null;
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
		debugger
		var renderedTemplate = this.template(this.model.attributes);
		
		console.log(this.model);
    // empty div // html render the variable above
		this.$el.html(renderedTemplate);

	},

	showImageDetail: function(){
		detailInstance = new DetailView({model: this.model});
	}
});

//////////////////////////////
// Detail View
//////////////////////////////

var DetailView = Parse.View.extend({
	template: _.template($('.detail-display-template').text()),
	className: 'main-image-holder', 
		
	initialize: function() {
		$('.photo-container').append(this.el);
		this.render();
		console.log('This is the DetailView');
	},

	render: function(){
		var renderedTemplate = this.template(this.model.attributes)
		this.$el.html(renderedTemplate);
	}
})
