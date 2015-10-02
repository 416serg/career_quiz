Template.question.onCreated(function() {
	var self = this;
	self.autorun(function() {
		self.subscribe('question', FlowRouter.getQueryParam('q'))
	})
});

Template.question.onRendered(function() {
	if (_.isUndefined(Session.get('answeredQuestions'))) {
		Session.set('answeredQuestions', []);
	}
	new WOW().init();
});

Template.question.helpers({
	question: function () {
		var question = Questions.find({slug: FlowRouter.getQueryParam('q')}).fetch()[0];
		if (question) return Questions.findOne(question._id);
	},
	backgroundColor: function() {
		var backgrounds = ['purple', 'indigo', 'blue', 'light-blue', 'cyan', 'green', 'orange'];
		return h.pickRandom(backgrounds);
	},
	counter: function() {
		return Session.get('answeredQuestions').length + 1;
	},
	tweetParams: function() {
    var str = "";
    var str1 = "?text=How would you answer this question? ";
    var str2 = '&url='+'http://careerpredictor.com/question?q='+FlowRouter.getQueryParam('q');
    var str3 = '&via=claimthefuture';
    return str.concat(str1, str2, str3);
  },
  facebookLink: function() {
    var str = "https://www.facebook.com/sharer/sharer.php?_rdr=p&app_id=";
    var appId = Meteor.settings.public.facebook.appId;
    var str1 = "&display=popup&ref=plugin&sdk=joey&src=share_button&u=http://careerpredictor.com&display=popup&ref=plugin&src=share_button";
    return str.concat(appId, str1);
  },
});

Template.question.events({
	'click .click-answer': function(e,t) {
		e.preventDefault();
		$('.container').addClass('fadeOutLeft');
		var answeredQuestions = Session.get('answeredQuestions');
		var question = Questions.find({slug: FlowRouter.getQueryParam('q')}).fetch()[0];
		if (question) answeredQuestions.push(question._id);
		if (answeredQuestions.length != Session.get('answeredQuestions')) Session.set('answeredQuestions', answeredQuestions);
		Meteor.setTimeout(function() {
	    Meteor.call('nextQuestion', Session.get('answeredQuestions'), function(error, result) {
				if (!error) {
					if (Session.get('answeredQuestions').length >= 15) {
						FlowRouter.go('result')
					} else {
						FlowRouter.setQueryParams({q:result.slug})
						$('.container').removeClass('fadeOutLeft');
						$('.container').addClass('fadeInRight');
					}
				} else {
					console.log(error);
				}
			});
	  }, 500) 
			
	}
});

var entrances = ['fadeInLeft', 'fadeInDown', 'fadeInUp', 'zoomIn']