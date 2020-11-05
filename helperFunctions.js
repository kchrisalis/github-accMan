// Helper Functions 

// Initialize Accounts
function initAcc() {
  let storedlogAcc = localStorage.getItem('loginAcc');
  if (storedlogAcc) {
    return JSON.parse(storedlogAcc);
  } else {
    return [{
      username: "hello",
      password: "1234"
    }];
  }
}

function initInfo() {
  let storedAccs = localStorage.getItem('addAcc');
  if (storedAccs) {
    return JSON.parse(storedAccs);
  } else {
    return [{
      website: "instagram",
      username: "something",
      email: "something@gmail.com",
      password: "1234"
    }];
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
function login() {
  if (check(loginAccounts, user, username) && check(loginAccounts, pass, password)) {
    console.log("success");
  } else {
    console.log("failure");
  }
}

// Create Account
function createLogin() {
  // Check if username exists
  if (check(loginAccounts, nUser, "username") == true) {
    alert('Taken username. Choose another one');
  } else if (nUser.value == "" || nPass.value == "") {
    alert("Please fill in all fields");
  } else {
    console.log(loginAccounts);
    // Push account info to storage
    loginAccounts.push({
      username: nUser.value,
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

// Check if value exists
function check(array, userInputVal, checkItem) {
  for (let i = 0; i < array.length; i++) {
    if (userInputVal.value.toLowerCase() == array[i][checkItem].toLowerCase()) {
      return true;
    } else {
      return false;
    }
  }
}

// Add Accounts to Array
function addAcc() {
  addAccounts.push({
    website: document.getElementById("webV").value,
    username: document.getElementById("userV").value,
    email: document.getElementById("emailV").value,
    password: document.getElementById("passV").value
  });

  localStorage.setItem('addAcc', JSON.stringify(addAccounts));
  console.log(addAccounts);

  // Clear Inputs
  let formInputEl = document.querySelectorAll("input", ".formClear");
  for (let i = 0; i < formInputEl.length; i++) {
    formInputEl[i].value = "";
  }
}

// Create rows in the account manager table
function createRow(array) {
  let tREl = document.createElement('tr');
  tREl.innerHTML = `
  <td>${array.website}</td>
  <td>${array.username}</td>
  <td>${array.email}</td>
  <td>${array.password}</td>
  <td><a href="#">Edit</a></td>
  `
  tREl.classList.add("rowContent");

  document.getElementById('testTable').append(tREl);

  return tREl;
}

// Redraw table
function tableRedraw() {
  let row = document.getElementsByClassName("rowContent");
  for (let i = 0; i < row.length; i++) {
    row[i].innerHTML = "";
  }
  
  for (let i = 0; i < addAccounts.length; i++) {
    document.getElementById("testTable").append(createRow(addAccounts[i]));
  }
}