Template.home.onRendered(function() {
  Session.set('answeredQuestions', []);
});

Template.home.helpers({
	queryQuestion: function () {
		return !_.isUndefined(FlowRouter.getQueryParam('q'));
	}
});

Template.home.events({
	'click #get-started': function(e,t) {
		e.preventDefault();
		analytics.track('Clicked Get Started');
		Meteor.call('nextQuestion', Session.get('answeredQuestions'), function(error, result) {
			if (!error) {
				FlowRouter.go('question');
				FlowRouter.setQueryParams({q:result.slug})
			} else {
				console.log(error);
			}
		});
	}
});