//Lia Tuchman and Zoe Meller's Game
score = 0;
var spaceGrotesk//name of font
var pipes = []
var bird;
var timestamp=0;
var start_timer = false;
var funfact
//var start = false;
// var funFact = false;
//var end = false
let song;

var screen;
let ufoImg, pipeiImg

var facts = ['Mercury is closest to the sun.','Mars is known as the “red planet”.','Planet Saturn has rings surrounding it.','Venus is known as Earth’s sister planet.','Jupiter is a gas giant.','Neptune is blue and stormy.','There are 8 planets in our solar system.','The planets orbit the Sun.','Mercury is the smallest planet in our system.','The atmosphere protects Earth from radiation.','Saturn has the most moons.','Gravity is the phenomenon that keeps planets in orbit around the sun.','The sun is 4.6 Billion years old.','The Asteroid Belt is located Between Mars and Jupiter.']

function preload (){
  ufoImg = loadImage('—Pngtree—alien ufo clip art_6125636.png');
  //pipeImg = loadImage('assets/pipes.png');
spaceGrotesk = loadFont('SpaceGrotesk-VariableFont_wght.ttf')
   song = loadSound('Space Music Royalty Free _ Ambient Music for Video.mp3');
  song2 = loadSound('369515__lefty-studios__jumping-sfx.wav')
  endsong = loadSound('175409__kirbydx__wah-wah-sad-trombone.wav')
}

function setup() {
 
  createCanvas(400, 500);
  bird = new Bird();
 pipes.push(new Pipe());
  screen = 0
}

function draw() {
  /*
   * **Creating a Starry background**
   * A review on for-loops and random()
  */
  
  background(0); // Sets a black background 
   //creating a Circle
  fill (255);
    ellipse(random(400), random(400), 5); 
  fill (255);
    ellipse(random(400), random(400), 5); 

  if(screen == 0){ //beginning of start screen
    
    fill(255)
    textSize(25)
    textFont('acquire')
    text("Hey! welcome to Alien Invasion!",35,100)
    fill(255)
    textSize(15)
    text("Rules of the game: to move the UFO up press the space bar.",5,150)
    fill(255)
    textSize(18)
    text("Try to keep the UFO in between the beams!",10, 200)
    fill(255)
    textSize(20)
    text("If you hit a beam the game will be OVER!",10,250)
    fill(255)
    textSize(25)
    text("Learn a fun fact on your way out!",10,300)
    fill(255)
    textSize(30)
    text("Press enter to start the game!",4,350)
  }// end of start screen
    
  else if (screen == 1){
     // This loops NUM times ( Play around with the value of NUM )
  let NUM = 5;
   for (let i = 1; i < NUM; i++) 
    fill(255);//white
    for (var i = pipes.length - 2; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();

      bird.show();
      bird.update();

      textSize(32);
      text(score/2, 50, 50);
      
		
    if (pipes[i].hits(bird)) {
    score == 0;
   screen == 2; 
      
    }else if(frameCount%100 == 0){
      score = score + 1;
  
    } 
    if (pipes[i].offscreen()) {
      pipes.splice(i, 1)



    }
    
  }
  }
  else if (screen == 2){
    //clear();
    background (0);
    song.stop();
    var number = round(random(facts.length))
    
    fill(255)
    textSize(20)
     if(start_timer == false){
      funfact = facts[number]
      timestamp = millis()
      start_timer = true
    }
    if(millis()<timestamp + 2000){
      text(funfact, 100,200,250,250)
    }
    else if (millis()>timestamp+2000){
      start_timer = false
    }
      // funfact = facts[number]
      
      text(funfact, 100,200,250,250)
    
 
    
    
    
  }


  //   else if (screen == 2){
  //   fill (255);
  //   textSize(32);
  //  text(score/2, 50, 50);
  //   text('Hello world')
      
  
   
    

  if (frameCount % 100 == 0) {
    pipes.push(new Pipe());

  }
  
  if (score == 1) {
    score += 1
}
  // else if(screen==3){
    
  //end game
    
 //  }
}//end draw


function keyPressed() {
  if (key == ' ') {
    //console.log("w is pressed");
    bird.up();
    song2.play();
  }
  if (keyCode == ENTER) {
    //console.log("w is pressed");
    screen = 1;
    if(song.isPlaying() == false){
      song.play();
    }
  }
   if (keyCode == UP_ARROW){ 
     clear ();
     //nice job!! looks good!
     //and you had screen == 0(this is for comparison)
     //instead of screen = 0(this changes the value)
     //love the fun facts!!
     screen = 0;
   }
  
}
function mousePressed() {
  
}
