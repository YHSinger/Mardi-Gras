
//rotating card

document.getElementById("maincontainer").addEventListener("mouseleave",function(){
document.getElementById("change").checked = false;
});


 function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}