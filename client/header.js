Template.header.onRendered(function() {
	$('.button-collapse').sideNav();
	$(".dropdown-button").dropdown();
});

Template.header.events({
	'click #logo-container': function(e,t) {
		Session.set('answeredQuestions', []);
	},
	'click .ryf-header-link': function(e,t) {
		analytics.track('Click RYF Header');
	},
	'click .social-header-link': function(e,t) {
		analytics.track('Click Social Header');
	}
})