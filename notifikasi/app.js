  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD5T6Fsj9u8pyxL1SuV-zdVZyZrKAKooBI",
    authDomain: "rafi-priatna-notifikasi-ab001.firebaseapp.com",
    databaseURL: "https://rafi-priatna-notifikasi-ab001.firebaseio.com",
    projectId: "rafi-priatna-notifikasi-ab001",
    storageBucket: "rafi-priatna-notifikasi-ab001.appspot.com",
    messagingSenderId: "1087319142489"
  };
  firebase.initializeApp(config);
  
  const messaging = firebase.messaging();
  messaging.requestPermission().then(function() {
 .then(function(){
   console.log('Ada izin');
 })

.catch.(function(err){
   console.log('Error gan');
 })
