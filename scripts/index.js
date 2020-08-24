const { db, auth } = require("./auth");

const guideList = document.querySelector('.guides');
const loggedInLinks = document.querySelectorAll('.logged-in');
const loggedOutLinks = document.querySelectorAll('.logged-out');
const accountDetails = document.querySelector('.account-details');




/********************************************** ON AUTH CHAGES ************************************/

auth.onAuthStateChanged(user => {
  if (user) {
    // db.collection('guides').get().then(snapshot => {
    db.collection('guides')
      .onSnapshot(snapshot => {
        setupUI(user);
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



/********************************************** SETUP THE UI **************************************/

const setupUI = (user) => {
  if (user) {
    db.collection('users').doc(user.uid).get().then(doc => {
      let bio = doc.data().bio;
      accountDetails.innerHTML = `<div>🧔 ${user.email}</div><hr/><div>${bio}</div>`
    });
    loggedInLinks.forEach(item => item.style.display = 'block');
    loggedOutLinks.forEach(item => item.style.display = 'none');
  } else {
    loggedInLinks.forEach(item => item.style.display = 'none');
    loggedOutLinks.forEach(item => item.style.display = 'block');
    accountDetails.innerHTML = "";
  }
}



/********************************************** SETUP THE GUIDES **********************************/

const setupGuides = data => {
  let html = '';

  if (data.length) {
    data.forEach(doc => {
      const guide = doc.data();
      const li = `
        <li>
          <div class="collapsible-header grey lighten-4">
            ${guide.title}
            </div>
            <div class="collapsible-body white">
            ${guide.content}
          </div>
        </li>
      `;

      html += li;
    });

    guideList.innerHTML = html;
  }
  else {
    guideList.innerHTML = `<h5 class='center-align'>Login to view the guides</h5>`
  }
}




/********************************************** SETUP MATERIAL UI *********************************/

document.addEventListener('DOMContentLoaded', function () {
  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);
  var items = document.querySelectorAll('.collapsible');
  M.Collapsible.init(items);
});