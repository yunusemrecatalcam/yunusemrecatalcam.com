window.onresize = calc_pos;
calc_pos();

function calc_pos(){
  var topnav = document.getElementById("topnav");
  var dropdowns =document.getElementsByClassName("dropdown-content");
  var len = (topnav.offsetHeight-1) + "px";
  Array.from(dropdowns).forEach(function(element){
    element.style.top = len;
    console.log(element.style.width);
  });
  document.getElementById("myDropdown").style.right = "0px";//($("#myDropdown").outerWidth()+ "px");
}

function midmenu(content_id) {
  document.getElementById(content_id).classList.toggle("show");
}
// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}
