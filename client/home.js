Template.home.onRendered(function() {
  Session.set('answeredQuestions', []);
});

Template.home.helpers({
	queryQuestion: function () {
		return !_.isUndefined(FlowRouter.getQueryParam('q'));
	},
	productHunt: function() {
    return FlowRouter.getQueryParam('ref') === "producthunt";
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

Template.productHuntT.events({
  'click #dismiss-ph': function(e,t) {
    e.preventDefault();
    $('.product-hunt').fadeOut();
  }
});