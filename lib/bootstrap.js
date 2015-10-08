Questions = new Mongo.Collection("questions");

analytics.load( Meteor.settings.public.segment.writeKey);

if (Meteor.isClient) {
  Meteor.startup(function() {
    Tracker.autorun(function(c) {
      var user;
      if (!FlowRouter.current()) {
        return;
      }
      user = Meteor.user();
      if (!user) {
        return;
      }
      analytics.identify(user._id, {
        email: user.emails[0].address,
        name: user.profile.name
      });
      c.stop();
    });
  });
}