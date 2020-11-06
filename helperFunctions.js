// Helper Functions 

// Global Variables
let user = document.getElementById("username");
let pass = document.getElementById("password");
let nUser = document.getElementById("newUser");
let nPass = document.getElementById("newPass");

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

  let inputEl = document.querySelectorAll("input");
  for (let i = 0; i < inputEl.length; i++) {
    inputEl[i].value = "";
  }
}

// Log In
function login() {
  if (check(loginAccounts, user, "username") && check(loginAccounts, pass, "password")) {
    return true;
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
    }
  }
}

let id = 0;

// Add Accounts to Array
function addAcc() {
  addAccounts.push({
    website: document.getElementById("webV").value,
    username: document.getElementById("userV").value,
    email: document.getElementById("emailV").value,
    password: document.getElementById("passV").value,
    edit: id++
  });

  localStorage.setItem('addAcc', JSON.stringify(addAccounts));
  console.log(addAccounts);

  // Clear Inputs
  let inputEl = document.querySelectorAll("input");
  for (let i = 0; i < inputEl.length; i++) {
    inputEl[i].value = "";
  }
}



// Redraw table
function tableRedraw() {
  console.log('hello');
  document.getElementById('tableDiv').innerHTML = "";

  let tableEl = document.createElement('table');
  tableEl.id = ('testTable');

  let tREl = document.createElement('tr');
  tREl.innerHTML = `<th>Website</th>
  <th>Username</th>
  <th>Email</th>
  <th>Password</th>`;
  tableEl.append(tREl);

  for (let i = 0; i < addAccounts.length; i++) {
    let newRow = tableEl.insertRow(-1);
    let accInfo = Object.values(addAccounts[i]);

    for (let w = 0; w < accInfo.length; w++) {
      let newCell = newRow.insertCell(w);
      newCell.innerHTML = accInfo[w];
      newRow.append(newCell);

      // if (w > accInfo) {
      //   let editCell = newRow.insertCell(w);
      //   editCell.innerHTML = `
      //     <a href="#" data-set=i>Edit</a>`
      //   newRow.append(editCell);
      // }
    }
    tableEl.append(newRow);
  }

  return tableEl;
}



// Edit account information
function editAcc() {

}

// redraw table function
// individual ids
// basically get the ids so that it can be deleted and edited