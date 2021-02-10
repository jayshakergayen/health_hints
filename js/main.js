function my_function() {
    var tips = ["Run around your neighbourhood", 
    "Make a healthy salad", 
     "Find how many pushups you can do in 30sec",
      "Make a time capsule",
      "Meditate for 3min",
      "Get your heart rate to 60bpm",
      "Plant a garden",
      "Call your friends/family",
      "Make a planner for this week",
      "Talk to a neighbour",
      "If you have a pet then play with them",
      'Learn "Twinkle Twinkle Little Star" on an instrument',
      "Take a shower and scrub yourself clean",
      "Make someone happy :)",
      "Make a short story",
      "Make a healthy smoothie",
      "Go on a healthy diet (NOT A FAD DIET!!!)",
      "Write a Poem",
      "Clean up your room and make your bed (I like to listen to music while I do it)",
      "Yoga (the best medicine)",
      "Listen to music",
      "Learn something new",
      "Draw or paint something",
      "Create a bucket list to complete",
      "Watch a movie, tv show, etc. that you want to watch",
      "Think about what you would do if you were stuck in your house the whole day",
      "Take a small nap",
      "Bake cookies, cake, brownies, etc. (it's not that hard)",
      "Go into a forest/park and try to spot as many animals as you can, write them down (make sure to be careful)",
      "Count how many countries you've been too and count the ones you want to go to",
      'Code something like print "Hello World"'
    
    ];
    
    let random = Math.floor(Math.random() * tips.length);
    console.log(tips.length);
    document.getElementById("paragraph1").innerHTML = tips[random];
}

