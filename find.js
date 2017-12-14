var box = document.getElementById("box");
var boxHeight = box.offsetHeight;
var boxWidth = box.offsetWidth;

//hardcode target as center
//randomize later
var targetX = Math.random()*boxWidth;
var targetY = Math.random()*boxHeight;

var arr = [0,0];
var dist=0;
var maxDistance=0;

var points = 0;

console.log( "box height: " + boxHeight );
console.log( "box width: " + boxWidth );

//console.log(e.clientX,e.clientY);

var randomizeTarget = function(e) {
    targetX = Math.random()*boxWidth;
    targetY = Math.random()*boxHeight;
}

//calculate distance between current mouse pos and target
var distance = function (x0, y0, x1, y1) {
  return ((((x1-x0)**2) + ((y1-y0)**2))**.5);
};


//logs the current position of the mouse, and also returns it
var findIt = function(e) {
  arr=[e.x,e.y];
  console.log(arr[0],arr[1]);
  //console.log(arr);
  return arr;
};

//logs the current distance of the mouse from the target, and also returns it
var findDistance = function(e){
  dist = distance(arr[0],arr[1],targetX,targetY);
	console.log("distance: " + distance(arr[0],arr[1],targetX,targetY));
  return dist;
}

//Event Listeners to constantly track the position of the mouse and it's distance from the target
box.addEventListener("mousemove", findIt);
box.addEventListener("mousemove", findDistance);

//The lightness of the color is based on the ratio of the current distance to the maximum distance
var addColor = function(e){
  dist= distance(arr[0],arr[1],targetX,targetY);
  farthest=distance(0,0,boxWidth,boxHeight)/2;
  lightness=(dist/farthest) *100;
    console.log("lightness: "+ lightness);
    if (lightness < 3) {
	console.log("You should click now!");
    }
  box.setAttribute("style", "background-color: hsl(175,100%,"+(100-lightness)+"%)");
  
};

//Sends an alert if you click while close enough to the target
//Automatically reloads after the user clicks okay
var found= function(e){
    if(lightness<3){
	points += 1;
	console.log("Good work! Score: " + points);
	console.log("\n\nThis has been a Bayan & Ibnul production");
	//alert spawns an alert box
	if(alert("Good work! Score: " + points)){}
	//when the alert is closed, the target is changed
	else randomizeTarget; 
    }
};

//Event Listeners to change the color when the mouse moves, and to display the alert when the target is found
box.addEventListener("mousemove", addColor);
box.addEventListener("click", found);




/*
event : 'mousemove'
e.x //xcor of mouse
e. y//ycor of mouse
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
