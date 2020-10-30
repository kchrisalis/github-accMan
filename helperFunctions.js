// Helper Functions 

function newAcc() {
  document.getElementById('loginTitle').innerHTML = "Create New Account";
  document.getElementById("bTxt").innerHTML = `<p id="bTxt">Already have an account? Log in <a href="#" onclick="existAcc()">here.</a></p>`
}

function existAcc() {
  document.getElementById('loginTitle').innerHTML = "Log In";
  document.getElementById("bTxt").innerHTML = `<p id="bTxt">Don't have an account? Make an account <a href="#" onclick="newAcc()">here.</a></p>`
}