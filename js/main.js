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
      "Listeno to music",
      "Learn something new"
    
    ];
    
    let random = Math.floor(Math.random() * tips.length);
    console.log(tips.length);
    document.getElementById("paragraph1").innerHTML = tips[random];
}

