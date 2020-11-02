// Helper Functions 

// Arrays
let loginAccounts = initAcc();

function initAcc() {
  let storedlogAcc = localStorage.getItem('loginAcc');
  if (storedlogAcc) {
    return JSON.parse(storedlogAcc);
  } else {
    return [];
  }
}

// Global Variables
let user = document.getElementById("username");
let pass = document.getElementById("password");
let nUser = document.getElementById("newUser");
let nPass = document.getElementById("newPass");

// Clear Page
function clearDivs() {
  for (let i = 0; i < document.getElementById("content").children.length; i++) {
    document.getElementById("content").children[i].style.display = "none";
  }
}

// Display Div
function displayDiv(divId) {
  clearDivs();
  document.getElementById(divId).style.display = "block";
}

// Log In
function login () {

}

// Create Account
function createLogin() {
  // Check if username exists
  if (check(loginAccounts, nUser, username) == true) {
    alert('Taken username. Choose another one');
  } else if (nUser.value == "" || nPass.value == "") {
    alert("Please fill in all fields");
  } else {
    console.log(loginAccounts);
    // Push account info to storage
    loginAccounts.push({
      username: nUser.value.toLowerCase(),
      password: nPass.value
    });

    localStorage.setItem('loginAcc', JSON.stringify(loginAccounts));

    // Clear
    nUser.value = "";
    nPass.value = "";

    // Return to log in page
    clearDivs();
    displayDiv("logIn");
  }
}

function check(array, userInputVal, checkItem) {
  for (let i = 0; i < array.length; i++) {
    if (userInputVal.value.toLowerCase() == array[i].checkItem.toLowerCase()) {
      return true;
    } else {
      return false;
    }
  }
}