(function (root){
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Bullet = Asteroids.Bullet = function(){
    Asteroids.MovingObject.apply(this, arguments);
    this.color = 'black'
    this.radius = 2;
  }


  Bullet.inherits(Asteroids.MovingObject);






})(this);