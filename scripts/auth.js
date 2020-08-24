/********************************************** FIREBASE INIT *************************************/
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/functions';

firebase.initializeApp({
  apiKey: "AIzaSyAvG9Dd3Wecyzc9jby8yiC0z210sZBjmvI",
  authDomain: "project-manathan-781227.firebaseapp.com",
  databaseURL: "https://project-manathan-781227.firebaseio.com",
  projectId: "project-manathan-781227",
  storageBucket: "project-manathan-781227.appspot.com",
  messagingSenderId: "697524608485",
  appId: "1:697524608485:web:c5990129bf8b6c3643230c",
  measurementId: "G-TVDE4JMC09"
});

export const auth = firebase.auth();
export const db = firebase.firestore();
export const functions = firebase.functions();




/********************************************** CURRENT USER **************************************/

auth.onAuthStateChanged(user => {
  console.log(user?.email);
});




/**********************************************  REGISTER *****************************************/

const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', e => {
  e.preventDefault();

  //************ Get user info
  const email = signupForm['signup-email'].value;
  const password = signupForm['signup-password'].value;
  const bio = signupForm['signup-bio'].value;

  //*********** Sign in the user & create bio
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((res) => {
      return db.collection('users').doc(res.user.uid).set({ bio });
    })
    .then(res => {
      const modal = document.querySelector('#modal-signup');
      M.Modal.getInstance(modal).close();
      signupForm.reset();
    });
});




/********************************************  LOG-OUT ********************************************/

const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
  e.preventDefault();
  auth.signOut();
})




/********************************************** LOGIN *********************************************/

const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', e => {
  e.preventDefault();

  const email = loginForm['login-email'].value;
  const password = loginForm['login-password'].value;

  auth
    .signInWithEmailAndPassword(email, password)
    .then(res => {
      const modal = document.querySelector('#modal-login');
      M.Modal.getInstance(modal).close();
      loginForm.reset();
    });
});



/********************************************** BESTOW ADMIN PRIVILEGES ***************************/

const adminForm = document.querySelector('.admin-actions');
adminForm.addEventListener('submit', e => {
  e.preventDefault();
  const adminEmail = document.querySelector('#admin-email').value;
  console.log(adminEmail);
  const addAdminRole = functions.httpsCallable('addAdminRole');
  addAdminRole({ email: adminEmail }).then(res => console.log(res)).catch(e => console.log(e));
});




/********************************************** CREATE A NEW GUIDE ********************************/

const createForm = document.querySelector('#create-form');
createForm.addEventListener('submit', e => {
  e.preventDefault();

  db.collection('guides')
    .add({
      title: createForm['title'].value,
      content: createForm['content'].value,
    })
    .then(() => {
      const modal = document.querySelector('#modal-create');
      M.Modal.getInstance(modal).close();
      createForm.reset();
    })
    .catch(e => {
      console.log(e.message);
    });
});