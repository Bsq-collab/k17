var box = document.getElementById("box");
var boxHeight = box.offsetHeight;
var boxWidth = box.offsetWidth;

//hardcode target as center
//randomize later
var targetX = boxWidth / 2;
var targetY = boxHeight / 2;


console.log( "box height: " + boxHeight );
console.log( "box width: " + boxWidth );

//calculate distance between current mouse pos and target
var distance = function (x0, y0, x1, y1) {
  return ((((x1-x0)**2) + ((y1-y0)**2))**.5);
};



var findIt = function(e) {
    console.log(e.clientX,e.clientY);
};

console.log("mousex: ");
findIt();
console.log("distance:"+ distance(e.X,e.Y,targetX,targetY));


/*
your OTHER FXNS

*/

box.addEventListener("mousemove", findIt);
/*
event : 'mousemove'
e.X //xcor of mouse
e.y //ycor of mouse
*/
