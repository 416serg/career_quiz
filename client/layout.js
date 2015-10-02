Template.layout.onRendered(function() {
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '1524251957866805',
      xfbml      : true,
      version    : 'v2.4'
    });
  };
  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
});

Template.layout.helpers({
  tweetParams: function() {
    var str = "";
    var str1 = "?text=Take the greatest career quiz of all time. You'll be glad you did!";
    var str2 = '&url='+'http://careerpredictor.com';
    var str3 = '&via=claimthefuture';
    return str.concat(str1, str2, str3);
  },
  facebookLink: function() {
    var str = "https://www.facebook.com/sharer/sharer.php?_rdr=p&app_id=";
    var appId = Meteor.settings.public.facebook.appId;
    var str1 = "&display=popup&ref=plugin&sdk=joey&src=share_button&u=http://careerpredictor.com&display=popup&ref=plugin&src=share_button";
    return str.concat(appId, str1);
  },
  notQuestions: function() {
  	return _.isUndefined(FlowRouter.getQueryParam('q'));
  }
});

Template.layout.events({
	'click .btn-floating': function (e,t) {
		// e.preventDefault();
		$('.button-ul').css('display', 'block');
		$('.fixed-action-btn').addClass('active');
	},
	'hover .btn-floating': function (e,t) {
		// e.preventDefault();
		$('.button-ul').css('display', 'block');
		$('.fixed-action-btn').addClass('active');
	},
});