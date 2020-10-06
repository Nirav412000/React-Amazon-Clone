import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDvpvwy-Cca38lkYTP61snDWdgURb8XSFQ",
    authDomain: "clone-amaazon-8866.firebaseapp.com",
    databaseURL: "https://clone-amaazon-8866.firebaseio.com",
    projectId: "clone-amaazon-8866",
    storageBucket: "clone-amaazon-8866.appspot.com",
    messagingSenderId: "128817917000",
    appId: "1:128817917000:web:b0e4a549a71551da18bc7d",
    measurementId: "G-MS6VCG1DGC"
});

export const db = firebaseApp.firestore();
export const auth = firebase.auth();

