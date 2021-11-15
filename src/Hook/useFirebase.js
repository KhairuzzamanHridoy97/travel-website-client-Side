import intializeFirebase from "./../Firebase/Firebase.init";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";

intializeFirebase();

const useFirebase = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  // const history= useHistory();
  // const location = useLocation();
  // const url = location.state?.from || "/home" ;
  

  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        // history.push(url)
        sessionStorage.setItem("email", result.user.email);
        // console.log(result.user);
        setError("");
      })
      .catch((error) => setError(error.message));
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        const uid = user.uid;
      } else {
        // User is signed out
        // ...
      }
    });
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return {
    handleGoogleLogin,
    user,
    handleLogout,
  };
};

export default useFirebase;
