// function sum(args) {
//   var result = 0;
//   var nums = Array.prototype.slice.call(arguments)
//   nums.forEach(function(i){
//     result += i;
//   })
//   return result;
// }

// console.log(sum(1,2,3,4));
var cat = {
  age: 5,
  age_one_year: function (x) {
    this.age += x;
  }
};


Function.prototype.myBind= function(myObj) {
  var that = this;
  var bound_args = Array.prototype.slice.call(arguments, 1);

  var method = function (){
    var ard = Array.prototype.slice.call(arguments);
    var joined = bound_args.concat(ard);
    return that.apply(myObj, joined); // <<<<had to add return to this line..thought we tried that
  }

   return method;
}

function aging(a, b, c) {
  console.log(arguments);

  console.log(this)
  return a + b + c + this.age;
}

var boundAging = aging.myBind(cat, 2,3);
console.log(aging.myBind(cat, 2, 3)(5));
//console.log(aging.apply(cat,[2,3,5]));
console.log("------");
console.log(boundAging(5));


//
// var g = cat.age_one_year.myBind(cat);
// g(5)
// console.log(cat.age);

function curriedSum(numArgs){
  var nums = [];
  var _curriedSum = function(num){
    nums.push(num)
    if (nums.length === numArgs){
      var result = 0;
      nums.forEach(function(el){
        result += el;
      })
      return result;
    } else {
      return _curriedSum;
    }
  }
  return _curriedSum;
}

// var x = curriedSum(3);
// console.log(x(1)(2)(3));



Function.prototype.curry = function(numArgs){
  var nums = [];
  var that = this
  var _curried = function(num){
    nums.push(num);
    if (nums.length === numArgs){
      return that.apply(null, nums);
    } else {
      return _curried;
    }
  }
  return _curried;
}

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}


// var f1 =  sumThree.curry(3);
// console.log(f1(1)(2)(3))





