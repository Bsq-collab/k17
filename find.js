var box = document.getElementById("box");
var boxHeight = box.offsetHeight;
var boxWidth = box.offsetWidth;

//hardcode target as center
//randomize later
var targetX = boxWidth / 2;
var targetY = boxHeight / 2;

var arr = [0,0];
var dist=0;
var maxDistance=0;

console.log( "box height: " + boxHeight );
console.log( "box width: " + boxWidth );

//console.log(e.clientX,e.clientY);

//calculate distance between current mouse pos and target
var distance = function (x0, y0, x1, y1) {
  return ((((x1-x0)**2) + ((y1-y0)**2))**.5);
};



var findIt = function(e) {
  arr=[e.x,e.y];
  console.log(arr[0],arr[1]);
  //console.log(arr);
  return arr;
};

var findDistance = function(e){
  dist = distance(arr[0],arr[1],targetX,targetY);
	console.log("distance: " + distance(arr[0],arr[1],targetX,targetY));
  return dist;
}

box.addEventListener("mousemove", findIt);
box.addEventListener("mousemove", findDistance);

var addColor = function(e){
  dist= distance(arr[0],arr[1],targetX,targetY);
  farthest=distance(0,0,boxWidth,boxHeight)/2;
  lightness=(dist/farthest) *100;
  console.log("lightness: "+ lightness);
  box.setAttribute("style", "background-color: hsl(175,100%,"+(100-lightness)+"%)");
  
};
var found= function(e){
  if(lightness<3){
    alert("Good work!!")//js pop up
  }
};
box.addEventListener("mousemove", addColor);
box.addEventListener("click", found);
                     
/*
event : 'mousemove'
e.X //xcor of mouse
e.Y //ycor of mouse
*/
/*
  NOTES
  JS for selecting HTML elements from the dom:
  document.getElementById(ID)
  document.getElementByTagName(TAG)
  document.getElementsbyCLassName(class)
  document is like the root/computer/c:
  JS for manipulating HTML elements
  ELEMENT.remove()
  ELEMENT.innerHTML(HTML)
  document.createElement(html, tag, name)
  ELEMENT. appendChild(element)
  element.setAttribute(name,value)
  element.getAttribute(mname)
  element.addEventListener(event,function)
*/
