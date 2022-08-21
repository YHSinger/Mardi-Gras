/* make pics larger on click*/
             function toggleSize(e) {
               if (e.target.className.indexOf('fixed') > -1) {
                 e.target.className = e.target.className.replace('fixed', '');
               } else {
                                 e.target.className += "fixed";     
               }
              }

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}