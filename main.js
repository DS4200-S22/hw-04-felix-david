
// Counter function for circle1

var counter = 0;
function circle1Clicked() {
	document.getElementById("counter").innerHTML = counter+1;
	counter += 1;
	console.log(counter);
}

// Mouseover and Mouseout events for circle2
document.getElementById("circle2").onmouseover = function() {addBorder()};
document.getElementById("circle2").onmouseout = function() {removeBorder()};

function addBorder() {
  document.getElementById("circle2").style.stroke = "black";
  document.getElementById("circle2").style.strokeWidth = "5px";
    console.log("moused over");
}

function removeBorder() {
  document.getElementById("circle2").style.strokeWidth = "0px";
}

// Click to hide and make reappear circle3

function circle3Clicked() {
  let appear = document.getElementById("circle3").getAttribute("class");
  if (appear == "outer-circle") {
    document.getElementById("circle3").setAttribute("class", "transparent");
  } else {
    document.getElementById("circle3").setAttribute("class", "outer-circle")
  }
}
