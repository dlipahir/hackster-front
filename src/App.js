import { useEffect } from 'react';
import './App.css';
import Menu from './comp/menu';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPhoneNumber } from "firebase/auth";
import { RecaptchaVerifier } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBAAMrLeIEZ6V6BQ7RVQGCaXhHDZA4KuMQ",
  authDomain: "hackster-76701.firebaseapp.com",
  projectId: "hackster-76701",
  storageBucket: "hackster-76701.appspot.com",
  messagingSenderId: "708976123545",
  appId: "1:708976123545:web:8698cbd3f80a235adf6208"
};


const app = initializeApp(firebaseConfig);

function App() {
  const auth = getAuth();
  useEffect(() => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "normal",
          callback: (response) => {},
          "expired-callback": () => {},
        },
        auth
      );
    }
  }, []);
  return (
    <div className="App">
      <div id="recaptcha-container"></div>
  <Menu/>
  <ToastContainer/>
    </div>
  );
}

export default App;
