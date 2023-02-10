window.onload = function() {
    var coursesLine = document.getElementById('coursesLine')
    function moveSLide() {
        coursesLine.style.right += (288 + 'px');
      }
    setInterval(moveSLide(), 100)

}