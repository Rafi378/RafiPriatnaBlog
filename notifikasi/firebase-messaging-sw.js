importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-messaging.js');


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB5RVi1468NVOkNcD9r7FmEaGOjkJscUtQ",
    authDomain: "rafi-priatna-notifikasi.firebaseapp.com",
    databaseURL: "https://rafi-priatna-notifikasi.firebaseio.com",
    projectId: "rafi-priatna-notifikasi",
    storageBucket: "rafi-priatna-notifikasi.appspot.com",
    messagingSenderId: ""
  };

  firebase.initializeApp(config);
  const messaging = firebase.messaging();
