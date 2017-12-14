/*
  Team iBerry-- Bayan Berri & Ibnul Jahan
  SoftDev1 pd7
  K17--Moo?
  2017-12-14
*/
var box = document.getElementById("box");
var boxHeight = box.offsetHeight;
var boxWidth = box.offsetWidth;

//Randomly sets the target upon each page refresh.
var targetX = Math.random()*boxWidth;
var targetY = Math.random()*boxHeight;
//initializing variables 
var arr = [0,0];//array of coordinates
var dist=0;//distance from the target 
var maxDistance=0;//used with dist to create a percentage

console.log( "box height: " + boxHeight );
console.log( "box width: " + boxWidth );


//calculate distance between current mouse pos and target
var distance = function (x0, y0, x1, y1) {
  return ((((x1-x0)**2) + ((y1-y0)**2))**.5);
};


//returns array of the coordinates [x,y] of the mouse
var findIt = function(e) {
  arr=[e.x,e.y];
  console.log("Mouse coordinates:");
  console.log("("+ arr[0]+","+arr[1]+")");
  return arr;
};
//returns the distance from the mouse to the target
var findDistance = function(e){
  dist = distance(arr[0],arr[1],targetX,targetY);
	console.log("distance: " + distance(arr[0],arr[1],targetX,targetY));
  return dist;
}

box.addEventListener("mousemove", findIt);
box.addEventListener("mousemove", findDistance);
//creates a ratio of distance to farthese distance 
var addColor = function(e){
  dist= distance(arr[0],arr[1],targetX,targetY);
  maxDistance=distance(0,0,boxWidth,boxHeight)/2;
  lightness=(dist/maxDistance) *100;
  console.log("lightness: "+ lightness);
  box.setAttribute("style", "background-color: hsl(175,100%,"+(100-lightness)+"%)")//uses ratio to set Attribute
  
};
//hooray!
var found= function(e){
  if(lightness<5){//if the percent is <5 then it's at the right place and you win!!
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
