import firebase from 'firebase';
import "firebase/storage"
import "firebase/auth"



const app = firebase.initializeApp({
        apiKey: "AIzaSyDnu-JocfHVA9L5-nT9BhZuLc0vPh2iXYA",
        authDomain: "grandma-cooked-oatmeal.firebaseapp.com",
        databaseURL: "https://grandma-cooked-oatmeal-default-rtdb.firebaseio.com",
        projectId: "grandma-cooked-oatmeal",
        storageBucket: "grandma-cooked-oatmeal.appspot.com",
        messagingSenderId: "387846083697",
        appId: "1:387846083697:web:40fa824bd6342212a3b7d0",
        measurementId: "G-NSE9BK3H0E"
    })
;
export const auth = app.auth();
export const db = firebase.firestore();

export default app