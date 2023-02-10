window.onload = function() {
    var coursesLine = document.getElementById('coursesLine')
    var offset = 0;
    function moveSLide() {
        offset = offset + 289;
        coursesLine.style.right =  offset + 'px';
      }
    setInterval(() => moveSLide(), 3000)
      

}
