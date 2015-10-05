Template.header.onRendered(function() {
	$('.button-collapse').sideNav();
	$(".dropdown-button").dropdown();
});

Template.header.events({
	'click #logo-container': function(e,t) {
		Session.set('answeredQuestions', []);
	}
})