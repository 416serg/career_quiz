var transitions = [
	'right-to-left',
	'slide-height',
	'left-to-right',
	'fade'
]

Transitioner.setTransitions({
  // 'main->left': 'left-to-right',
  // 'left->main': 'right-to-left',

  // 'main->right': 'right-to-left',
  // 'right->main': 'left-to-right',
  // 'home->question': h.pickRandom(transitions),
  // 'question->question': h.pickRandom(transitions),
  'default':'right-to-left'
});