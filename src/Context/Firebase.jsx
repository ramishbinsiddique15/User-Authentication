import { createContext, useContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  updatePassword
} from "firebase/auth";
import { getDatabase, ref, set, get, child } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCsWramzQbgyvo4XAGQx0d6zPuxf7iqM_U",
  authDomain: "authentication-abf89.firebaseapp.com",
  projectId: "authentication-abf89",
  storageBucket: "authentication-abf89.appspot.com",
  messagingSenderId: "548808247531",
  appId: "1:548808247531:web:9251689618414bca3756ae",
  databaseURL: "https://bookflix-7a0ce-default-rtdb.firebaseio.com"
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const firebaseDatabase = getDatabase(firebaseApp);
const googleProvider = new GoogleAuthProvider();

const FirebaseContext = createContext(null);
export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {
  const [user, setUser] = useState(null);
  const [pic, setPic] = useState(null);

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (users) => {
      if (users) {
        setUser(users);
        setPic(users.photoURL);
      } else {
        setUser(null);
      }
    });
  }, []);

  // Signup method
  const signupWithUsernameAndPassword = (email, pass) => {
    return createUserWithEmailAndPassword(firebaseAuth, email, pass);
  };

  // Login method
  const loginWithUsernameAndPassword = (email, pass) => {
    return signInWithEmailAndPassword(firebaseAuth, email, pass);
  };

  // Log out
  const logout = () => {
    return signOut(firebaseAuth);
  };

  // Sign in with Google method
  const signInWithGoogle = () => {
    return signInWithPopup(firebaseAuth, googleProvider);
  };

  // Update password method
  const updatePasswordForUser = (newPassword) => {
    const firebaseUser = firebaseAuth.currentUser;
    if (firebaseUser) {
      return updatePassword(firebaseUser, newPassword);
    } else {
      return Promise.reject(new Error("No user is currently logged in."));
    }
  };

  // Save todos to Firebase
  const saveTodosToFirebase = (todos) => {
    if (user) {
      const todosRef = ref(firebaseDatabase, `todos/${user.uid}`);
      return set(todosRef, todos);
    }
  };

  // Fetch todos from Firebase
  const fetchTodosFromFirebase = async () => {
    if (user) {
      const dbRef = ref(firebaseDatabase);
      const snapshot = await get(child(dbRef, `todos/${user.uid}`));
      if (snapshot.exists()) {
        return snapshot.val();
      }
      return [];
    }
  };

  // Checking if user is logged in or not
  const isLoggedIn = user ? true : false;
  
  // Returning the context provider
  return (
    <FirebaseContext.Provider
      value={{
        signupWithUsernameAndPassword,
        loginWithUsernameAndPassword,
        signInWithGoogle,
        logout,
        updatePasswordForUser,
        saveTodosToFirebase,
        fetchTodosFromFirebase,
        isLoggedIn,
        pic,
        user, 
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};