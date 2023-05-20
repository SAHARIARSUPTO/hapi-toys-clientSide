// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtpx9QzJx4Vj_oPjjuZRAb6kwjLOfLIEU",
  authDomain: "hapi-toys.firebaseapp.com",
  projectId: "hapi-toys",
  storageBucket: "hapi-toys.appspot.com",
  messagingSenderId: "907402716538",
  appId: "1:907402716538:web:9f3602a4e3bb281bad62c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;