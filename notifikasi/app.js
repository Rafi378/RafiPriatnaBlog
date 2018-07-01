  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB5RVi1468NVOkNcD9r7FmEaGOjkJscUtQ",
    authDomain: "rafi-priatna-notifikasi.firebaseapp.com",
    databaseURL: "https://rafi-priatna-notifikasi.firebaseio.com",
    projectId: "rafi-priatna-notifikasi",
    storageBucket: "rafi-priatna-notifikasi.appspot.com",
    messagingSenderId: "447298606224"
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
