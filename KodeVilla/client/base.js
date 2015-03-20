Meteor.startup(function () {
	AccountsEntry.config({
		homeRoute: '/', 
		dashboardRoute: '/home'  
          // mandatory - path to redirect to after successful sign-i
      });
});