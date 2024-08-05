// const firebase = require("firebase");
// // Required for side-effects
// // require("firebase/firestore");
// let firebaseConfig = {
 
// };

// // // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
  
// let db = firebase.firestore();




// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};
// config keys are not mentioned for privacy reasons 

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
let db = firebase.firestore();
let auth = firebase.auth();
// 
const logoutUser = () => {
  auth.signOut();
  location.reload();
}