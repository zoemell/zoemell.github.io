function Bird() {
  this.y = height / 2;
  this.x = width / 2;

  this.gravity = .06;
  this.lift = -10;
  this.velocity = 0;
  let img;
 img = loadImage('Untitled-Artwork.png');
  

//   this ufoImg 

// function preload (){
//   ufoImg = loadImage('—Pngtree—alien ufo clip art_6125636.png');}
  
  this.show = function() {
    //fill(0, 255, 200);
    //  fill(0, 200, 200);
    // ellipse(this.x, this.y, 32, 32);
    image(img, this.x, this.y, 85, 85);
  }
  this.up = function() {
  this.velocity += this.lift;
    
  }
  this.update = function() {
    this.velocity += this.gravity;
    this.velocity*=0.9;
    this.y += this.velocity;

    if (this.y > height) {
      this.y = height;
      this.velocity = 0
    }


    if (this.y < 0) {
      this.y = 0;
      this.velocity = 0
    }
  }


}
