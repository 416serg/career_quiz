Meteor.publish('question', function(questionSlug) {
	// check(questionSlug, String);
	var questionId = Questions.find({slug: questionSlug}).fetch()[0]._id;
	return Questions.find({_id: questionId});
});