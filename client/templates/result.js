Template.result.onRendered(function () {
  Session.set('splashLoaded', false);
  Session.set('result', h.pickRandom(results));
  if (rwindow.screen('lt', 'medium')) {
  	$('.button-ul').css('display', 'none');
  }
});

Template.result.helpers({
  loaded: function() {
    return Session.get('splashLoaded');
  },
  backgroundColor: function() {
    var backgrounds = ['purple', 'indigo', 'blue', 'light-blue', 'cyan', 'green', 'orange'];
    return h.pickRandom(backgrounds);
  },
  calcBlurb: function() {
    return h.pickRandom(calcBlurbs);
  },
  result: function() {
    return Session.get('result').title;
  },
  resultImg: function() {
  	return Session.get('result').img;
  },
  resultBlurb: function() {
    return Session.get('result').blurb;
  },
  tweetParams: function() {
    var str = "";
    var str1 = "?text=I just took the worst career quiz ever. It said my ideal career is " + Session.get('result').title;
    var str2 = '&url='+'http://careerpredictor.com';
    var str3 = '&via=claimthefuture';
    return str.concat(str1, str2, str3);
  },
  facebookLink: function() {
    var str = "https://www.facebook.com/sharer/sharer.php?_rdr=p&app_id=";
    var appId = "859416150762358";
    var str1 = "&display=popup&ref=plugin&sdk=joey&src=share_button&u=http://careerpredictor.com&display=popup&ref=plugin&src=share_button";
    return str.concat(appId, str1);
  },
});

Template.result.events({
	'click #again': function (e,t) {
		e.preventDefault();
		Session.set('answeredQuestions', []);
		FlowRouter.go('/');
	}
});

Template.loading.rendered = function () {
  // launch splash
  this.loading = window.pleaseWait({
    logo: h.pickRandom(loadingImgs),
    backgroundColor: h.pickRandom(backgrounds),
    loadingHtml: '<p class="loading-message">' + h.pickRandom(messages) + '</p>'
                + h.pickRandom(spinners)
  });

  // manually remove loading for demo
  var loading = this.loading;
  Meteor.setTimeout(function () {
    loading.finish();
    Session.set('splashLoaded', true);
  }, 7000);
};

Template.loading.destroyed = function () {
  this.loading.finish();
};


// --------------------------------------------------------
// Demo items
// --------------------------------------------------------

var calcBlurbs = [
  "Your childhood dreams don't matter. Our data scientists have determined that your ideal career match is:", 
  "Our data scientists have calculated that you will be most successful in a career as: ",
  "Some people are destined to become a performer, others to become a doctor. You? You're career destiny will lead you to become:",
  "Our advanced career-matching algorithm has determined to 99.3364% accuracy that your ideal career is:",
  "By the year 2018, there is a 98.98834% chance you will be enjoying your career as:",
  "You and 3 of your friends will find your most success and happiness becoming: "
];


var results = [
  {
  	title:"An actual potato",
		img: 'potato.jpg',
    blurb: "You're dependable, predictable and you also come from the Spanish word patata."
	},
	{
  	title:"A Brazilian mosquito researcher",
		img: 'brazilian-mosquito-researcher.jpg',
    blurb: "You take risks, you're not afraid to get your hands dirty and you love mesh clothing."
	},
  {
  	title:"A taser tester",
		img: 'taser-tester.jpg',
    blurb: "You're a born helper, you love working with people and nothing makes you feel more alive than incapacitating your body via electricity."
	},
  {
  	title:"Odor tester",
		img: 'odor-tester.jpg',
    blurb: "You're always the awkward person smelling hair, car seats and your hands after touching anything. "
	},
  {
  	title:"A whale feces researcher",
		img: 'whale-feces-researcher.jpg',
    blurb: "You're all about anything that helps phytoplankton live longer and you've always been a hands-on kind of person."
	},
	{
  	title:"A crocodile feeder",
		img: 'crocodile-feeder.jpg',
    blurb: "You live on the edge, you're not afraid to laugh in the face of danger and let's be honest, you're also a little crazy."
	},
	{
  	title:"A unicorn trainer",
		img: 'unicorn-trainer.jpg',
    blurb: "You're asleep and we're doing anything to not wake you up. Enjoy your career as a unicorn trainer. "
	},
	{
  	title:"A stop sign",
		img: 'stop-sign.jpg',
    blurb: "You're a born enforcer, you stand up for what you believe in and you enjoy assisting the police in meeting monthly ticket quotas."
	},
	{
  	title:"A target holder",
		img: 'target-holder.jpg',
    blurb: "Your first word as a child was 'bullseye', you have nerves of steel and you love beating everybody's 'most dangerous day at work' stories. "
	},
	{
  	title:"A knight's squire",
		img: 'knights-squire.jpg',
    blurb: "Because you're living in the 1300's. In which case, how did you get access to a computer? "
	},
	{
  	title:"A sofa bed",
		img: 'sofa-bed.JPG',
    blurb: "You enjoy making people comfortable, you're multi-talented and you always hide when company comes over. "
	},	
	{
  	title:"A shredded cheese expert",
		img: 'shredded-cheese-expert.jpg',
    blurb: "Your four food groups are gouda, goat, cheddar and asiago. Either that or you're from Wisconsin. "
	},
	{
  	title:"A paperfolder",
		img: 'paperfolder.jpg',
    blurb: "You like folding paper, you aren't afraid of paper cuts and you've won the paper airplane contest at the city fair 13 years straight. "
	},
	{
  	title:"A Knitter in residence",
		img: 'knitter-in-residence.jpg',
    blurb: "You enjoy taking care of others, you love getting a job done and your personal mantra is, 'scarves for everybody'. "
	},
	{
  	title:"A Penguinologist",
		img: 'penguinologist.jpg',
    blurb: "We actually have no idea but we're hoping, at the very least, you like either penguins or Pingu. "
	},
	{
  	title:"The vice President of Infinite Infinity",
		img: 'vp-infinite-infintiy.jpg',
    blurb: "You love numbers, especially the huge never-ending ones and you're great at delegating tasks. "
	},
	{
  	title:"A tattoo",
		img: 'tattoo.jpg',
    blurb: "You're persistent, you aren't afraid to make a statement and 17 yr olds around the world hide you from their parents. "
	},
	{
  	title:"A pair of denim shorts",
		img: 'denim-shorts.jpg',
    blurb: "You're dependable, your performance is consistent and you also appeared in every photo from the 70s. "
	},
	{
  	title:"A buoy",
		img: 'buoy.jpg',
    blurb: "You are a natural leader, you help others find their way and seagulls love eating their stolen lunch on you. "
	},
	{
  	title:"A segway",
		img: 'segway.jpg',
    blurb: "You're ahead of the curve, you enjoy assisting others and you're the cause of some of the most hilarious fail videos on the internet. "
	}
];

var loadingImgs = [
  'gifs/cat.gif',
  'gifs/rabbit.gif',
  'gifs/monkey.gif',
  'gifs/horse.gif',
  'gifs/cat_1.gif'
]

// Loading messages
var messages = [
  "Hold tight! Our data scientists are crunching the numbers and running the results through our algorithm. You're results will appear here. "
  // 'You look nice today',
  // 'Amazing things come to those who wait',
  // 'You usually have to wait for that which is worth waiting for',
  // 'Don\'t wait for opportunity. Create it.',
  // 'A day without sunshine is like, you know, night.',
  // 'My fake plants died because I did not pretend to water them.',
  // 'Weather forecast for tonight: dark.'
];

// Backgrounds
var backgrounds = [ '#7f8c8d', '#1abc9c', '#2980b9', '#7f8c8d',
                    '#f1c40f', '#27ae60', '#7f8c8d', '#7f8c8d' ];

//
// Spinners from SpinKit
//   https://github.com/tobiasahlin/SpinKit/blob/master/css/spinkit.css
//
var spinners = [
  // spinner-rotating-plane
  '<div class="sk-spinner sk-spinner-rotating-plane"></div>',

  // spinner-double-bounce
  '<div class="sk-spinner sk-spinner-double-bounce">'
  + ' <div class="sk-double-bounce1"></div>'
  + ' <div class="sk-double-bounce2"></div>'
  + '</div>',

  // spinner-double-bounce
  '<div class="sk-spinner sk-spinner-wave">'
  + ' <div class="sk-rect1"></div>'
  + ' <div class="sk-rect2"></div>'
  + ' <div class="sk-rect3"></div>'
  + ' <div class="sk-rect4"></div>'
  + ' <div class="sk-rect5"></div>'
  + '</div>',

  // spinner-wandering-cubes
  '<div class="sk-spinner sk-spinner-wandering-cubes">'
  + ' <div class="sk-cube1"></div>'
  + ' <div class="sk-cube2"></div>'
  + '</div>',

  // spinner-pulse
  '<div class="sk-spinner sk-spinner-pulse"></div>',

  // spinner-chasing-dots
  '<div class="sk-spinner sk-spinner-chasing-dots">'
  + ' <div class="sk-dot1"></div>'
  + ' <div class="sk-dot2"></div>'
  + '</div>',

  // spinner-three-bounce
  '<div class="sk-spinner sk-spinner-three-bounce">'
  + '  <div class="sk-bounce1"></div>'
  + '  <div class="sk-bounce2"></div>'
  + '  <div class="sk-bounce3"></div>'
  + '</div>',

  // spinner-circle
  '<div class="sk-spinner sk-spinner-circle">'
  + '  <div class="sk-circle1 sk-circle"></div>'
  + '  <div class="sk-circle2 sk-circle"></div>'
  + '  <div class="sk-circle3 sk-circle"></div>'
  + '  <div class="sk-circle4 sk-circle"></div>'
  + '  <div class="sk-circle5 sk-circle"></div>'
  + '  <div class="sk-circle6 sk-circle"></div>'
  + '  <div class="sk-circle7 sk-circle"></div>'
  + '  <div class="sk-circle8 sk-circle"></div>'
  + '  <div class="sk-circle9 sk-circle"></div>'
  + '  <div class="sk-circle10 sk-circle"></div>'
  + '  <div class="sk-circle11 sk-circle"></div>'
  + '  <div class="sk-circle12 sk-circle"></div>'
  + '</div>',

  // spinner-cube-grid
  '<div class="sk-spinner sk-spinner-cube-grid">'
  + '  <div class="sk-cube"></div>'
  + '  <div class="sk-cube"></div>'
  + '  <div class="sk-cube"></div>'
  + '  <div class="sk-cube"></div>'
  + '  <div class="sk-cube"></div>'
  + '  <div class="sk-cube"></div>'
  + '  <div class="sk-cube"></div>'
  + '  <div class="sk-cube"></div>'
  + '  <div class="sk-cube"></div>'
  + '</div>',

  // spinner-wordpress
  '<div class="sk-spinner sk-spinner-wordpress">'
  + '  <span class="sk-inner-circle"></span>'
  + '</div>',

  // spinner-fading-circle
  '<div class="sk-spinner sk-spinner-fading-circle">'
  + '  <div class="sk-circle1 sk-circle"></div>'
  + '  <div class="sk-circle2 sk-circle"></div>'
  + '  <div class="sk-circle3 sk-circle"></div>'
  + '  <div class="sk-circle4 sk-circle"></div>'
  + '  <div class="sk-circle5 sk-circle"></div>'
  + '  <div class="sk-circle6 sk-circle"></div>'
  + '  <div class="sk-circle7 sk-circle"></div>'
  + '  <div class="sk-circle8 sk-circle"></div>'
  + '  <div class="sk-circle9 sk-circle"></div>'
  + '  <div class="sk-circle10 sk-circle"></div>'
  + '  <div class="sk-circle11 sk-circle"></div>'
  + '  <div class="sk-circle12 sk-circle"></div>'
  + '</div>'
];