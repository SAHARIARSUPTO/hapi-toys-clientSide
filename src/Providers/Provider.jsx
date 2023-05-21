import { createContext, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut, GoogleAuthProvider } from "firebase/auth";
import app from "../Firebase/Firebase";

export const AuthContext = createContext();
const auth = getAuth(app);

const Provider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  // Email/password authentication
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const handleSignin = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        setUser(loggedUser);
        setShowAlert(true);
        setAlertMessage("Sign-in Successful!");
        console.log(loggedUser);
      })
      .catch((error) => {
        setShowAlert(true);
        setAlertMessage("Sign-in Failed!");
        console.log(error);
      });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    form.reset();

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const loggedUser = result.user;
        setUser(loggedUser);
        setShowAlert(true);
        setAlertMessage("Sign-in Successful!");
        console.log(loggedUser);
      })
      .catch((error) => {
        setShowAlert(true);
        setAlertMessage("Sign-in Failed!");
        console.log(error);
      });
  };

  const handleSignInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const loggedUser = result.user;
        setUser(loggedUser);
        setShowAlert(true);
        setAlertMessage("Sign-in Successful!");
        
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        setShowAlert(true);
        setAlertMessage("Logged out successfully");
        
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const authInfo = {
    handleSignin,
    handleLogin,
    handleSignInWithGoogle,
    handleLogout,
    user,
    alertMessage,
    showAlert,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default Provider;
