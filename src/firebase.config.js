import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBsSi_FeG9tpqG7U0TXidT56HS7GU_Riz8",
    authDomain: "team-project-bd489.firebaseapp.com",
    projectId: "team-project-bd489",
    storageBucket: "team-project-bd489.appspot.com",
    messagingSenderId: "467961369734",
    appId: "1:467961369734:web:6e04dbb7ea77c3fa0e2d07",
    measurementId: "G-E3B31QLZZK"
  };

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebase.firestore();

export default db;
  