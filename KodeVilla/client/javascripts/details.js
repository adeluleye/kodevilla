Template.registerHelper('getImgSrc', function(picture){
	return Images.findOne(picture);
})