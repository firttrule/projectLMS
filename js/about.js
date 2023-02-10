window.onload = function() {
    var coursesLine = document.getElementById('coursesLine')
    var offset = 0;
    function moveSLide() {
      if (offset == 1280){
        offset = 0;
      }else{
        offset = offset + 320;
      }
      coursesLine.style.right =  offset + 'px';
      }
    setInterval(() => moveSLide(), 3000)
      

}
