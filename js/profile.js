window.onload = function() {
    var achiv = document.getElementById('achiv')
    var offset = 0;
    function moveSLide() {
        offset = offset + 289;
        achiv.style.right =  offset + 'px';
      }
    setInterval(() => moveSLide(), 3000)
      

}
