var box = document.getElementById("box");
var boxHeight = box.offsetHeight;
var boxWidth = box.offsetWidth;

//hardcode target as center
//randomize later
var targetX = boxWidth / 2;
var targetY = boxHeight / 2;

var arr = [0,0];

console.log( "box height: " + boxHeight );
console.log( "box width: " + boxWidth );

//console.log(e.clientX,e.clientY);

//calculate distance between current mouse pos and target
var distance = function (x0, y0, x1, y1) {
  return ((((x1-x0)**2) + ((y1-y0)**2))**.5);
};



var findIt = function(e) {
    arr=[e.clientX,e.clientY];
    console.log(arr[0],arr[1]);
    //console.log(arr);
    return arr;
};

var findDistance = function(e){
    console.log("distance: " + distance(arr[0],arr[1],targetX,targetY));
}

box.addEventListener("mousemove", findIt);
box.addEventListener("mousemove", findDistance);


//console.log("arr[0]: "+ arr[0]);
//console.log("distance: " + distance(arr[0],arr[1],targetX,targetY));
/*
event : 'mousemove'
e.X //xcor of mouse
e.Y //ycor of mouse
*/

