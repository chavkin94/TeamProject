import Rebase from 're-base';
import firebase from 'firebase';


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDsKC4ajJb7xML2nscASgjjZW9oynogH0M",
    authDomain: "study-a36b5.firebaseapp.com",
    databaseURL: "https://study-a36b5-default-rtdb.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

export {firebaseApp};

export default base;