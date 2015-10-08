FlowRouter.route('/', {
  name: 'home',
  triggersEnter: [trackRouteEntry],
  action: function (params, queryParams) {
    BlazeLayout.render('layout', {
        // top: 'mainToolbar',
        top: 'header',
        main: 'home'
    });
  },
  triggersExit: [trackRouteClose]
});

FlowRouter.route('/question', {
  name: 'question',
  triggersEnter: [trackRouteEntry],
  action: function (params, queryParams) {
    BlazeLayout.render('layout', {
        // top: 'mainToolbar',
        top: 'header',
        main: 'question'
    });
  },
  triggersExit: [trackRouteClose]
});

FlowRouter.route('/result', {
  name: 'result',
  triggersEnter: [showResult, trackRouteEntry],
  action: function (params, queryParams) {
    BlazeLayout.render('layout', {
        // top: 'mainToolbar',
        top: 'header',
        main: 'result'
    });
  },
  triggersExit: [trackRouteClose]
});

function showResult(context) {
  if (Meteor.isClient) {
    if (!_.isUndefined(Session.get('answeredQuestions'))) {
      if (Session.get('answeredQuestions').length < 15) {
        FlowRouter.go('/');
      }
    } else {
      FlowRouter.go('')
    }
  }
}

function trackRouteEntry(context) {
  analytics.page('entering ' + context.path);
}

function trackRouteClose(context) {
  analytics.page('leaving ' + context.path);
}