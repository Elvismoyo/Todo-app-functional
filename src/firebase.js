import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    
        apiKey: "AIzaSyDG6YkN_9Hfgm6TjbvlzBu2Wl_-c01npYc",
        authDomain: "todo-app-e3d9d.firebaseapp.com",
        databaseURL: "https://todo-app-e3d9d.firebaseio.com",
        projectId: "todo-app-e3d9d",
        storageBucket: "todo-app-e3d9d.appspot.com",
        messagingSenderId: "958375853003",
        appId: "1:958375853003:web:81d35b35cdbb35c2f5544e"
     
});

const db = firebaseApp.firestore();
export default db;