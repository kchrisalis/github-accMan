// Account Manager

// Event Listener
document.addEventListener("click", clickHandler);

// Functions
function clickHandler() {
  if (event.target.nodeName == "BUTTON") {
    if (event.target.id == "loginBtn") {
      clearDivs();
      displayDiv("managePass");
      document.body.classList.add('bg2');
      document.body.classList.remove('bg1');


    } else if  (event.target.id == "logOut") {
      clearDivs();
      displayDiv("logIn")
      document.body.classList.add('bg1');
      document.body.classList.remove('bg2');

    } else if (event.target.id == "createAccBtn") {
      createLogin();
    }
  }
}

