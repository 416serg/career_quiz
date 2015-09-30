Meteor.startup(function () {
    if (Questions.find().count() === 0) {
    	var questions = [
    		{
    			title: "You've caught a co-worker stealing from the workplace. Which Lil Wayne Lyric best describes how you handle the situation:",
    			answers: [
    				"Boy you better go eat some soup with your mom 'n' them / And my mind is on another continent",
    				"Buying Haterade by the 12 pack...like two stomachs",
    				"Two rights don't make a wrong, three rights make a left",
    				"You know I'm on that grass, don't cut on the sprinklers"
    			],
    			slug: 'coworker-stealing'
    		},
            {
                title: "You're on a sinking island with Oprah, Jimmy Fallon, Drake and Beyonce. You have one small boat that can only you and one other person to safety. Who do you take with you?",
                answers: [
                    "Oprah",
                    "Jimmy Fallon",
                    "Beyonce",
                    "Drake"
                ],
                slug: 'sinking-island'
            },
            {
                title: "Adam is taller than Monique. Jordan eats more than Henry. Monique is Henry's older sister. Adam is on a train going 67miles per hour. Who's wearing a sweater vest?",
                answers: [
                    "Adam",
                    "Henry",
                    "Jordan",
                    "Monique"
                ],
                slug: 'sweater-vest'
            },
            {
                title: "What mythological creature has more magical powers?",
                answers: [
                    "A unicorn",
                    "An ogre",
                    "A centaur ",
                    "A llama"
                ],
                slug: 'mythological-creature'
            },
            {
                title: "Which of the following does not belong",
                answers: [
                    ":(",
                    ":)",
                    ";)",
                    ":/"
                ],
                slug: 'which-smiley'
            },
            {
                title: "Would you rather:",
                answers: [
                    "Isoceles",
                    "Equilateral"
                ],
                slug: 'triangle'
            },
            {
                title: "Would you rather:",
                answers: [
                    "Always trip on the first step",
                    "Always trip on the last step"
                ],
                slug: 'step-trip'
            },
            {
                title: "Would you rather:",
                answers: [
                    "One horse-sized duck",
                    "100 duck sized horses"
                ],
                slug: 'duck-horse'
            },
            {
                title: "Would you rather:",
                answers: [
                    "Never have to eat again",
                    "Never have to sleep again"
                ],
                slug: 'never-eat-drink'
            },
            {
                title: "Would you rather:",
                answers: [
                    "Instagram",
                    "Snapchat"
                ],
                slug: 'isntagram-snapchat'
            },
            {
                title: "Would you rather:",
                answers: [
                    "You win $50,000",
                    "Your best friend win $500,000"
                ],
                slug: 'lottery-win'
            },
            {
                title: "How would you best describe your leadership skills:",
                answers: [
                    "Rick Ross",
                    "Spongebob Squarepants",
                    "So You Think You Can Dance",
                    "Obama"
                ],
                slug: 'leadership-skills'
            },
            {
                title: "You have 4 different colored scarves to choose from to match your outfit, red, blue, purple, green. You have to be at the party by 7:00. What time do you arrive?",
                answers: [
                    "7:00",
                    "6:45",
                    "7:15",
                    "See you guys tomorrow"
                ],
                slug: 'tie-game'
            },
            {
                title: "You consider yourself:",
                answers: [
                    "Practical, Mechanical, a realistic person",
                    "Precise, scientific, intellectual",
                    "Expressive, original, independent ",
                    "Energetic, ambitious, sociable"
                ],
                slug: 'consider-yourself'
            },
            {
                title: "You sign up to volunteer on the weekends. Which of these jobs do you sign up for?",
                answers: [
                    "Birthday clown",
                    "Write a blog for a local charity",
                    "Clean up the local park",
                    "Dog walker"
                ],
                slug: 'volunteer-weekend'
            },
            {
                title: "You come home from work and your family wants to know how your day was. You're very excited to tell them that you:",
                answers: [
                    "Saved a cat from a burning building",
                    "You made a buzzer beater shot to win an important game",
                    "Topped your old record of eating 300 hot dogs in 30 min",
                    "Arrested a wanted criminal"
                ],
                slug: 'your-day'
            },
            {
                title: "I can't find my:",
                answers: [
                    "Socks",
                    "Phone",
                    "Pet lizard",
                    "Calling in life"
                ],
                slug: 'cant-find'
            },
            {
                title: "Mmmmmmm...",
                answers: [
                    "My bed",
                    "Tacos",
                    "Fast WiFi",
                    "Mm Nom Nom "
                ],
                slug: 'mmm'
            },
            {
                title: "Would you rather:",
                answers: [
                    "Clean up animal poop",
                    "Clean up human poop"
                ],
                slug: 'clean-up'
            },
            {
                title: "Would you rather:",
                answers: [
                    "Break something that somebody has built",
                    "Build something somebody will break"
                ],
                slug: 'build-break'
            },
            {
                title: "Which sequence is correct?",
                answers: [
                    "sock - shoe - sock - shoe",
                    "sock - sock - shoe - shoe",
                    "shoe - sock - sock - shoe",
                    "graham - chocolate - marshmallow - graham"
                ],
                slug: 'correct-sentence'
            },
            {
                title: "I do my best work:",
                answers: [
                    "Outdoors",
                    "With a team",
                    "Playing xBox",
                    "In a library"
                ],
                slug: 'best-work'
            },
    	]
        questions.forEach(function (question) {
            Questions.insert(question);
        });
    }
});
