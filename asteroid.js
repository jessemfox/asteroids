(function (root){
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Asteroid = Asteroids.Asteroid = function Asteroid(){
    Asteroids.MovingObject.apply(this, arguments);
    this.color = 'blue';
  }


  Asteroid.inherits(Asteroids.MovingObject);

  Asteroid.prototype.randomAsteroid = function(dimX, dimY){
    var center = [Math.random()*dimX, Math.random()*dimY];
    var radius = (Math.random()*60) + 10;
    var vel = [(Math.random() - .5)*7.5,(Math.random() - .5 )*7.5];
    return new Asteroid(center, vel, radius)
  }

  Asteroroid.prototype.multiply = function(){
    var astroid = this;
    var vel = [(Math.random() - .5)*7.5,(Math.random() - .5 )*7.5];
    var toProduce = Math.floor(Math.random() *5 );
    var array = []
    for(var i =0 ; i < toProduce; i++ ){
        array.push(new Asteroid(astroid.pos, vel, astroid.radius - 4))
      }
    return array
  }




})(this);