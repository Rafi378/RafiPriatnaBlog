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
  messaging.requestPermission().then(function() {
     //getToken(messaging);
     return messaging.getToken();
  }).then(function(token){
  console.log(token);
  })
.catch(function(err) {
  console.log('Permission denied', err);
});


messaging.onMessage(function(payload){
console.log('onMessage: ',payload);
});
