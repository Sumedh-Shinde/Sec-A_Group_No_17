const firebaseConfig = {
    apiKey: "AIzaSyAZCAn7o0GKB7NpPTo7GtEESSKywrlpt8Y",
    authDomain: "gymform1-3c1f8.firebaseapp.com",
    databaseURL: "https://gymform1-3c1f8-default-rtdb.firebaseio.com",
    projectId: "gymform1-3c1f8",
    storageBucket: "gymform1-3c1f8.appspot.com",
    messagingSenderId: "727629826034",
    appId: "1:727629826034:web:201f8085b73adce2f50d6b"
  };


  firebase.initializeApp(firebaseConfig);

var gymform1db = firebase.database().ref('gymform1');

document.getElementById('gymform1').addEventListener('submit',submitform); 

function submitform(e){
  e.preventDefault();

  var name = getElementVal('name');
  var email = getElementVal('email');
  var message = getElementVal('message');



  saveMessages(name,email,message);



}
const saveMessages = (name,email,message) =>{
  var newshippingform = gymform1db.push();

  newshippingform.set({
      name : name,
      email : email,
      message : message,

  })
}

const getElementVal = (id) =>{
  return document.getElementById(id).value;
}