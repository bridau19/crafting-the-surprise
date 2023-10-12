var slider = document.getElementById("myRange");
var slider2 = document.getElementById("myRange2");
var glasses = document.getElementById("glasses");
glasses.style.setProperty("left", slider.value + "px");
slider2.style.transform = "rotate(90deg)";

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
  glasses.style.setProperty("left", this.value + "px");
};
slider2.oninput = function () {
  glasses.style.setProperty("top", this.value + "px");
};

function showGlasses() {
  document.getElementById("glasses").style.display = "block";
}

function showBox() {
  document.getElementById("reveal").style.display = "block";
}

function reveal() {
  if (document.getElementById("reveal").checked) {
    document.getElementById("myRange2").style.display = "block";
  } else {
    document.getElementById("myRange2").style.display = "none";
  }
}
function showButton() {
  document.getElementById("myButton").style.display = "block";
}

function change() {
  document.getElementById("glasses").style.top = "600px";
}

function change2() {
  glasses.style.top = Math.random() * 100 + "px";
}

function change3() {
  glasses.style.top = Math.random() * 150 + "px";
}

function change4() {
  var getNum = glasses.style.top.replace("px", "");
  var convertNum = parseInt(getNum, 10);
  convertNum = convertNum + 25;

  glasses.style.top = convertNum + `px`;
  console.log("was: ", getNum, "now: ", convertNum);
}

function change5() {
  document.getElementById("glasses").style.top = "40vh";
}

function change6() {
  var getNum = glasses.style.top.replace("px", "");
  var convertNum = parseInt(getNum, 10);
  convertNum = convertNum - 15;

  glasses.style.top = convertNum + `px`;
  console.log("was: ", getNum, "now: ", convertNum);
}

// function change() {
//   var1 = document.getElementById("radio1");
//   var2 = document.getElementById("radio2");
//   var3 = document.getElementById("radio3");
//   var4 = document.getElementById("radio4");
//   var5 = document.getElementById("radio5");
//   var6 = document.getElementById("radio6");
//   if (var1.selected == true) {
//     glasses.style.top = "900px";
//   } else if (var2.selected === true) {
//     glasses.style.top = "200px";
//   } else {
//     glasses.style.top = "0px";
//   }
// }

// function change() {
//   var current = document.getElementById("glasses").style.top;
//   document.getElementById("glasses").style.top =
//     current + Math.random() * 100 + "px";
// }
