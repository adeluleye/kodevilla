/*
router style, initial configuration template
layoutTemplate will map to a layout template
notFoundTemplate will use a template named 404 or a name of your choice if you chose to change it
loadingTemplate will use a template with loading or a template

*/
Router.configure({
	layoutTemplate: 'maintemplate',
	// notFoundTemplate: '404',
	// loadingTemplate: 'loading'
});

// ============================================== routes ========================================================================
// route to sign-in page


//  route one basic
Router.route ('/', function(){
	this.render('index');
},{
  name: 'index',                       // name is an arbitrary value. Useful for helpers
  layoutTemplate:"index"

});

Router.route ('/allmails', function(){
	this.render('allmails');
	
}, {
	name: 'allmails',
	data: function(){

		return {
			emails: Emails.find().fetch()
		}
	}
});


//  route one basic
Router.route ('/home', function(){
	this.render('home');
	
}, {
	onBeforeAction: function () {
      AccountsEntry.signInRequired(this);
    },
	name: 'home',
	data: function(){
        
		return {
			projects: Projects.find().fetch()
		}
	}
});
Router.route('/projects/:category/', function(){
	this.render('projectsCategory');          // Render the same template as '/projects' route
}, {
	name: 'projectsCategory',

	data: function(){
		return {                        // Return only documents with the category in the parameters
			projects: Projects.find({category: this.params.category}).fetch(),
			pageTitle: 'Category: ' + this.params.category
		}
	}
});

// with params sent from the browser
// Router.route('/users/:_id', function(){
// 	this.render('user');
// 	name: 'userDetails'
// },{
// 	data: function() {
// 		var id = this.params._id;
// 		return {
// 			user: Users.findOne(id);
// 		}
// 	}
// });

// for different loading template and on wait

// Router.map( function () {
// 	this.route('user', {
// 		path: '/users/details/:_id',
// 		name: 'userDetail',
// 		layoutTemplate: 'userLayout',

// 		waitOn: function(){
// 			var pass = this.params._id;
// 			return [
// 			Meteor.subscribe('users', pass)			]
// 		},

// 		data: function() {
// 			return {
// 				info: Collections.find()
// 			}
// 		}
// 	});
// });

