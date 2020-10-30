// Account Manager

// Event Listener
document.addEventListener("click", clickHandler);

// Functions
function clickHandler() {
  if (event.target.nodeName == "BUTTON") {
    if (event.target.id == "loginBtn") {
      document.getElementById("logIn").style.display = "none";
      document.getElementById("managePass").style.display = "block";
      document.body.classList.add('bg2');
      document.body.classList.remove('bg1');
    } else if  (event.target.id == "logOut") {
      document.getElementById("logIn").style.display = "block";
      document.getElementById("managePass").style.display = "none";
      existAcc();
      document.body.classList.add('bg1');
      document.body.classList.remove('bg2');
    }
  }
}