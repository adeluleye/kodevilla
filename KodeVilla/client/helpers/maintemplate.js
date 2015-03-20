 /*Template.maintemplate.helpers({
 	user: function () {
 		if(Meteor.user()){
 			return true
 		} else{
 			return false
 		}

 	}
 });*/


 Template.maintemplate.helpers({
 	currentUser: function () {
 		if(Meteor.user()){
 			return true
 		} else{
 			return false
 		}

 	}
 });

 Template.prjUpload.events({
 	'click #btn-submit': function (e, t) {
    // ...
    // e.preventDefault();

    $('#btn-submit').modal('hide');

}
});