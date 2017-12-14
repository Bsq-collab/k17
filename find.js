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

var points = 0;

console.log( "box height: " + boxHeight );
console.log( "box width: " + boxWidth );


//calculate distance between current mouse pos and target
var distance = function (x0, y0, x1, y1) {
  return ((((x1-x0)**2) + ((y1-y0)**2))**.5);
};
//randomizes the target
var randomizeTarget = function(e) {
    targetX = Math.random()*boxWidth;
    targetY = Math.random()*boxHeight;
}



//returns array of the coordinates [x,y] of the mouse

//logs the current position of the mouse, and also returns it

var findIt = function(e) {
  arr=[e.x,e.y];
  console.log("Mouse coordinates:");
  console.log("("+ arr[0]+","+arr[1]+")");
  return arr;
};

//returns the distance from the mouse to the target
//logs the current distance of the mouse from the target, and also returns it

var findDistance = function(e){
  dist = distance(arr[0],arr[1],targetX,targetY);
	console.log("distance: " + distance(arr[0],arr[1],targetX,targetY));
  return dist;
}

//Event Listeners to constantly track the position of the mouse and it's distance from the target
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
}

//The lightness of the color is based on the ratio of the current distance to the maximum distance
var addColor = function(e){
  dist= distance(arr[0],arr[1],targetX,targetY);
  farthest=distance(0,0,boxWidth,boxHeight)/2;
  lightness=(dist/farthest) *100;
  console.log("lightness: "+ lightness);
  if (lightness < 5) {
	  console.log("You should click now!");
  }
  box.setAttribute("style", "background-color: hsl(175,100%,"+(100-lightness)+"%)");
  
};

//Sends an alert if you click while close enough to the target
//Automatically reloads after the user clicks ok
var found= function(e){
    if(lightness<5){
	    points += 1;
	    console.log("Good work! Score: " + points);
	    console.log("\n\nThis has been a Bayan & Ibnul production");
	    //alert spawns an alert box
	    alert("Good work! press Ok and refresh");
    };
}

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
