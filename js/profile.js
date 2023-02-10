window.onload = function() {
    var arrowLeft = document.getElementById('arrowLeft')
    var arrowRight = document.getElementById('arrowRight')
    var achivLine = document.getElementById('achivLine')
    var offset = 0;

    arrowLeft.onclick=function() {
      offset = offset - 150;
      achivLine.style.right = offset + 'px';

    }
    arrowRight.onclick=function() {
      offset = offset + 150;
      achivLine.style.right = offset + 'px';
    }
      

}
