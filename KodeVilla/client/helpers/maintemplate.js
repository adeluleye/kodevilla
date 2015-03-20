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
 	user: function () {
 		if(Meteor.user()){
 			return true
 		} else{
 			return false
 		}

 	}
 });

 Template.maintemplate.events({
 	'click #submit-close': function (e, t) {
    // ...
    // e.preventDefault();

    $('#btn-submit').modal('hide');

}
});