const firebaseConfig = {
  apiKey: "AIzaSyDmB4GCk5ToRu0-23SvhC6MuQVeucgObb8",
  authDomain: "gymform-b0711.firebaseapp.com",
  databaseURL: "https://gymform-b0711-default-rtdb.firebaseio.com",
  projectId: "gymform-b0711",
  storageBucket: "gymform-b0711.appspot.com",
  messagingSenderId: "642464303953",
  appId: "1:642464303953:web:cdaa1e249b506483822170"
};

firebase.initializeApp(firebaseConfig);

var gymformdb = firebase.database().ref('gymform');

document.getElementById('gymform').addEventListener('submit',submitform); 

function submitform(e){
  e.preventDefault();

  var name = getElementVal('name');
  var email = getElementVal('email');
  var message = getElementVal('message');



  saveMessages(name,email,message);



}
const saveMessages = (name,email,message) =>{
  var newshippingform = gymformdb.push();

  newshippingform.set({
      name : name,
      email : email,
      message : message,

  })
}

const getElementVal = (id) =>{
  return document.getElementById(id).value;
}