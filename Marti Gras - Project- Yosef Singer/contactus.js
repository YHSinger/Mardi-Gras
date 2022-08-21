function thanks(e) {
e.preventDefault();
  const fname =  document.getElementById("fname");
  const lname =  document.getElementById("lname");
  const email =  document.getElementById("email");
  const message =  document.getElementById("message");
  const status = document.getElementById("status")
  if (fname.value == "") {
     status.innerHTML = "First Name cannot be empty";
      return false;
  }
   if (lname.value == "") {
      status.innerHTML  = "Last Name cannot be empty";
      return false;
  }
  if (email.value == ""|| email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
      status.innerHTML  = "Email is not valid";
      return false;
  }
  if (message.value == "") {
      status.innerHTML  = "Message cannot be empty";
      return false;
  }
 status.innerHTML = "Sending..."
 setTimeout(() => { (status.innerHTML ="We will be in touch ASAP"); }, 1500);
}

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}