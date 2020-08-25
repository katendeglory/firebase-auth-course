const { db, auth } = require("./auth");

const guideList = document.querySelector('.guides');
const loggedInLinks = document.querySelectorAll('.logged-in');
const loggedOutLinks = document.querySelectorAll('.logged-out');
const accountDetails = document.querySelector('.account-details');
const adminItems = document.querySelectorAll('.admin');




/********************************************** 🌟 ON AUTH CHAGES 🌟 ************************************/

auth.onAuthStateChanged(user => {
  if (user) {

    /******************* 🌟 CHECK ADMIN CLAIMS 🌟 ***************/
    user.getIdTokenResult().then(token => {
      user.admin = token.claims.admin;
      setupUI(user);
    })

    // db.collection('guides').get().then(snapshot => {
    db.collection('guides')
      .onSnapshot(snapshot => {
        setupGuides(snapshot.docs);
      }, err => {
        console.log(err.message);
      });
  }
  else {
    setupUI();
    setupGuides([]);
  }
});




/********************************************** 🌟 SETUP THE UI 🌟 **************************************/

const setupUI = (user) => {
  if (user) {
    if (user.admin) {
      adminItems.forEach(item => item.style.display = 'block');
    }
    db.collection('users').doc(user.uid).get().then(doc => {
      let bio = doc.data().bio;
      accountDetails.innerHTML = `<div>🧔 ${user.email}</div><br/><div>${bio}</div><br/><div class="pink-text">${user.admin ? '🔥 Admin' : 'User'}</div>`;
    });
    loggedInLinks.forEach(item => item.style.display = 'block');
    loggedOutLinks.forEach(item => item.style.display = 'none');
  } else {
    adminItems.forEach(item => item.style.display = 'none');
    loggedInLinks.forEach(item => item.style.display = 'none');
    loggedOutLinks.forEach(item => item.style.display = 'block');
    accountDetails.innerHTML = "";
  }
}




/********************************************** 🌟 SETUP THE GUIDES 🌟 **********************************/

const setupGuides = data => {
  let html = '';
  if (data.length) {
    data.forEach(doc => {
      const guide = doc.data();
      const li = `
        <li>
          <div class="collapsible-header grey lighten-4">${guide.title}</div>
          <div class="collapsible-body white">${guide.content}</div>
        </li>`;
      html += li;
    });
    guideList.innerHTML = html;
  }
  else guideList.innerHTML = `<h5 class='center-align'>Login to view the guides</h5>`
}




/********************************************** 🌟 SETUP MATERIAL UI 🌟 *********************************/

document.addEventListener('DOMContentLoaded', function () {
  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);
  var items = document.querySelectorAll('.collapsible');
  M.Collapsible.init(items);
});