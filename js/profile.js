window.onload = function () {
  var arrowLeft = document.getElementById("arrowLeft");
  var arrowRight = document.getElementById("arrowRight");
  var achivLine = document.getElementById("achivLine");
  var offset = 0;

  arrowLeft.onclick = function () {
    if (offset > 0) {
      offset = offset - 96;
      achivLine.style.right = offset + "px";
    }
  };
  arrowRight.onclick = function () {
    if (offset <= 288) {
      offset = offset + 96;
      achivLine.style.right = offset + "px";
    }
  };
};
