import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: "AIzaSyAjsIz9OYounkDPvSs6GFDQu4cwsDFxlps",
  authDomain: "medicaltravel-26f49.firebaseapp.com",
  databaseURL: "https://medicaltravel-26f49.firebaseio.com",
  projectId: "medicaltravel-26f49",
  storageBucket: "medicaltravel-26f49.appspot.com",
  messagingSenderId: "345772228070",
  appId: "1:345772228070:web:8aa5067bad1664aef4aa27",
  measurementId: "G-V5SD2FT88F"
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
  }

  // Auth API Functions
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doSignInWithGoogle = () => this.auth.signInWithPopup(this.googleProvider);

  onAuthUserListener = (next, fallback) =>
    this.auth.onAuthStateChanged(authUser => {
      if (authUser) {
        this.user(authUser.uid)
          .once('value')
          .then(snapshot => {
            const dbUser = snapshot.val();

            // default empty roles
            if (!dbUser.roles) {
              dbUser.roles = [];
            }

            // merge auth and db user
            authUser = {
              uid: authUser.uid,
              email: authUser.email,
              emailVerified: authUser.emailVerified,
              providerData: authUser.providerData,
              ...dbUser
            };
            next(authUser);
          });
      } else {
        fallback();
      }
    });

  // *** User API ***
  user = uid => this.db.ref(`users/${uid}`);
  users = () => this.db.ref('users');
}

export default Firebase;