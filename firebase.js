const firebaseConfig = {
    apiKey: "AIzaSyDpWmeIbMrLnVrYWhzAo4PmObCVA6Ivi3g",
    authDomain: "my-firebase-degie.firebaseapp.com",
    databaseURL: "https://my-firebase-degie-default-rtdb.firebaseio.com",
    projectId: "my-firebase-degie",
    storageBucket: "my-firebase-degie.appspot.com",
    messagingSenderId: "164009800538",
    appId: "1:164009800538:web:dd10e3337705b44f5eb963"
  };
const app = firebase.initializeApp(firebaseConfig);
const auth= firebase.auth();
const db  = firebase.firestore();