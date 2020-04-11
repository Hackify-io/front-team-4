import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyAjsIz9OYounkDPvSs6GFDQu4cwsDFxlps',
  authDomain: 'medicaltravel-26f49.firebaseapp.com',
  databaseURL: 'https://medicaltravel-26f49.firebaseio.com',
  projectId: 'medicaltravel-26f49',
  storageBucket: 'medicaltravel-26f49.appspot.com',
  messagingSenderId: '345772228070',
  appId: '1:345772228070:web:8aa5067bad1664aef4aa27',
  measurementId: 'G-V5SD2FT88F',
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    /* Firebase APIs */
    this.auth = app.auth();
    this.db = app.database();

    /* Social Sign In Method Provider */
    this.emailProvider = new app.auth.EmailAuthProvider();
    this.googleProvider = new app.auth.GoogleAuthProvider();
    this.facebookProvider = new app.auth.FacebookAuthProvider();
  }

  // Auth API Functions
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignInWithGoogle = () => this.auth.signInWithPopup(this.googleProvider);

  doSignInWithFacebook = () => this.auth.signInWithPopup(this.facebookProvider);

  doSignOut = () => this.auth.signOut();

  onAuthUserListener = (next, fallback) =>
    this.auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        next(authUser);
      } else {
        fallback();
      }
    });

  // *** User API ***
  user = (uid) => this.db.ref(`users/${uid}`);
  users = () => this.db.ref('users');
}

export default Firebase;
