import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDJlTOpG87RdFKxDc47ebY75RsgzEARfvE',
  authDomain: 'urbn-hides-c13fa.firebaseapp.com',
  databaseURL: 'https://urbn-hides-c13fa.firebaseio.com',
  projectId: 'urbn-hides-c13fa',
  storageBucket: 'urbn-hides-c13fa.appspot.com',
  messagingSenderId: '902276883070',
  appId: '1:902276883070:web:64598a8f849b068c88ae2f'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
