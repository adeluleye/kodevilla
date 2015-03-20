Template.registerHelper('getImgSrc', function(picture){
	return Images.findOne(picture);
})

// Template.registerHelper('projects', function() {
// 	return Projects.findOne(Router.current().params._id)
// })`