Meteor.methods({
	nextQuestion: function(answeredQuestions) {
		check(answeredQuestions, Array);
		if (answeredQuestions.length > 0) {
			var questions = Questions.find({_id: { $nin: answeredQuestions } }).fetch();
		} else {
			var questions = Questions.find().fetch();
		}
		var nextQuestion = h.pickRandom(questions);
		return nextQuestion;
	}
})