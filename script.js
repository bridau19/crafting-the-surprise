var slider = document.getElementById("myRange");
var glasses = document.getElementById("glasses");
glasses.style.setProperty("left", slider.value + "px");

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
  glasses.style.setProperty("left", this.value + "px");
};

function showGlasses() {
  document.getElementById("glasses").style.display = "block";
}

function move() {
  var current = document.getElementById("glasses").style.marginLeft;
  document.getElementById("glasses").style.marginLeft = current + 100 + "px";
}
function move1() {
  var current = document.getElementById("glasses").style.marginTop;
  document.getElementById("glasses").style.marginTop = current - 200 + "px";
}
function move2() {
  var current = document.getElementById("glasses").style.marginTop;
  document.getElementById("glasses").style.marginTop = current + 100 + "px";
}
function move3() {
  document.getElementById("glasses").style.marginTop = "400px";
}
function move4() {
  var current = document.getElementById("glasses").style.marginTop;
  document.getElementById("glasses").style.marginTop = current + 320 + "px";
}

function change() {
  var current = document.getElementById("glasses").style.marginTop;
  if (document.getElementById("check-one").checked) {
    document.getElementById("glasses").style.marginTop = current + 320 + "px";
  } else {
    document.getElementById("glasses").style.marginTop = current + 320 + "px";
  }
}

function changeUp() {
  var current = document.getElementById("glasses").style.top;
  if (document.getElementById("check-two").checked) {
    document.getElementById("glasses").style.top = current - 300 + "px";
  } else {
    document.getElementById("glasses").style.top = current + 320 + "px";
  }
}

function randomBox() {
  var current = document.getElementById("glasses").style.top;
  if (document.getElementById("check-three").checked) {
    document.getElementById("glasses").style.top =
      current - Math.random() * 1000 + "px";
  } else {
    document.getElementById("glasses").style.top =
      current + Math.random() * 1000 + "px";
  }
}
