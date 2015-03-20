Meteor.startup(function () {
	AccountsEntry.config({
      dashboardRoute: '/home'      // mandatory - path to redirect to after successful sign-i
  });
});