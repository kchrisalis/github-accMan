// Account Manager

// Arrays
let loginAccounts = initAcc();
let addAccounts = initInfo();

// Event Listener
document.addEventListener("click", clickHandler);

// Functions
function clickHandler() {
  if (event.target.nodeName == "BUTTON") {

    // Logging into the account manager
    if (event.target.id == "loginBtn") {
      clearDivs();
      // login();
      displayDiv("managePass");
      document.body.classList.add('bg2');
      document.body.classList.remove('bg1');
     
      // Redraw Table
      tableRedraw();

      // Logging out of the account manager
    } else if (event.target.id == "logOut") {
      clearDivs();
      displayDiv("logIn")
      document.body.classList.add('bg1');
      document.body.classList.remove('bg2');

      // Creating a new login account
    } else if (event.target.id == "createAccBtn") {
      createLogin();

      // Displaying the form to add accounts
    } else if (event.target.id == "add") {
      document.getElementById("form").style.display = "block";
      document.getElementById("testTable").style.display = "none";

      // Adding information (about account) to the array
    } else if (event.target.id == "addInfo") {
      addAcc();

      tableRedraw();

      document.getElementById("form").style.display = "none";
      document.getElementById("testTable").style.display = "block";

      // Leave the adding account form
    } else if (event.target.id == "cancel") {
      document.getElementById("form").style.display = "none";
      document.getElementById("testTable").style.display = "block";
    }
  }
}
