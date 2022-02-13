function move() {
  var elem = document.querySelectorAll("#myBar1, #myBar2, #myBar3, #myBar4, #myBar5");

  var width = 1;
  var id = setInterval(frame, 50);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      for (let i = 0; i < elem.length; i++) 
      {
       width++; 
       elem[i].innerHTML = width + '%';
       elem[i].style.width = width + '%'; 
    }
   }
  }
}
