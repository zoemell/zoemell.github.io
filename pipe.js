function Pipe() {
  this.top = random(height / 2) - 40;
  this.bottom = random(height / 2) + 40;
  this.x = width;
  this.w = 20;
  this.speed = 2;
  
  this.highlight = false;

  this.hits = function(bird) {
    if (bird.y < this.top - 20 || bird.y > height - this.bottom +20) {
      if (bird.x > this.x && bird.x < this.x + this.w) {
				this.highlight = true;
        endsong.play();
        //noLoop ()
        screen = 2;
       
      
      }
  }
    this.highlight = false;
    return false;
}

  this.show = function() {
    fill(186,135,237);
    if (this.highlight) {
     fill(255, 0, 0);
    }
    rect(this.x, 0, this.w, this.top);
    rect(this.x, height - this.bottom, this.w, this.bottom);

  }

  this.update = function() {
    this.x -= this.speed;


  }
this.offscreen = function() {
    if (this.x < -this.w) {
      return true;
    } else {
      return false;
    }
  }
