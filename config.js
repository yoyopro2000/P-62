import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAFocT1TzvKlrgtUXFmnQ8GiW9M4aoWxUQ",
  authDomain: "school-attendance-app-46616.firebaseapp.com",
  databaseURL: "https://school-attendance-app-46616-default-rtdb.firebaseio.com",
  projectId: "school-attendance-app-46616",
  storageBucket: "school-attendance-app-46616.appspot.com",
  messagingSenderId: "850419610666",
  appId: "1:850419610666:web:0a2a46c0d9b78fc8e5ff53",
  measurementId: "G-0NVVL1J6HV"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default  firebase.database()
  