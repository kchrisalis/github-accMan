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
      password: "1234",
      edit: 0
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
  localStorage.setItem('id', JSON.stringify(id));
  console.log(addAccounts);

  // Clear Inputs
  let inputEl = document.querySelectorAll("input");
  for (let i = 0; i < inputEl.length; i++) {
    inputEl[i].value = "";
  }
}



// Redraw table
function tableRedraw() {
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
      if (w < 4) {
        let newCell = newRow.insertCell(w);
        newCell.innerHTML = accInfo[w];
        newRow.append(newCell);
      } else if (w == 4) {
        let editCell = newRow.insertCell(w);
        let pEl = document.createElement("p");
        pEl.innerHTML = `<a href = "#" data-id="${accInfo[w]}" onclick="editAcc()">Edit</a>`
        pEl.classList.add("editLink");
        editCell.append(pEl);
        newRow.append(editCell);
      }
    }
    tableEl.append(newRow);
  }

  return tableEl;
}



// Edit account information
function editAcc() {
  document.getElementById("form").style.display = "block";
  document.getElementById("testTable").style.display = "none";

  document.getElementById("formbuttons").innerHTML = `<button id="cancel">Cancel</button> <button id ="changeInfo" onclick="change()">Change Info</button><button onclick="deleteAccount()">Delete</button>`;

  document.getElementById("formHeader").innerHTML = "Change Information";

  for (let i = 0; i < addAccounts.length; i++) {
    if (addAccounts[i].edit == event.target.dataset.id) {
      console.log(event.target.dataset.id);

      document.getElementById("webV").value = addAccounts[i].website;
      document.getElementById("userV").value = addAccounts[i].username;
      document.getElementById("emailV").value = addAccounts[i].email;
      document.getElementById("passV").value = addAccounts[i].password;
    }
  }

  // need to add splice code

}

// redraw table function
// individual ids
// basically get the ids so that it can be deleted and edited

function change() {
  localStorage.setItem('addAcc', JSON.stringify(addAccounts));

  clearDivs();
  displayDiv("managePass");
  document.getElementById('tableDiv').append(tableRedraw());
  document.getElementById("form").style.display = "none";
  document.getElementById("testTable").style.display = "block";

}

function deleteAccount() {
  for (let i = 0; i < addAccounts.length; i++) {
    if (addAccounts[i].edit == event.target.dataset.id) {
      addAccounts.splice(i, 1);
    }
  }
  
  localStorage.setItem('addAcc', JSON.stringify(addAccounts));

  clearDivs();
  displayDiv("managePass");
  
  document.getElementById("form").style.display = "none";
  document.getElementById("testTable").style.display = "block";
  document.getElementById('tableDiv').append(tableRedraw());
}