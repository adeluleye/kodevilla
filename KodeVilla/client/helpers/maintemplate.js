 Template.maintemplate.helpers({
 	user: function () {
 		if(Meteor.user()){
 			return true
 		} else{
 			return false
 		}

 	}
 });