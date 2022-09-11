import { initializeApp } from "firebase/app";
import {getAnalytics} from 'firebase/analytics'
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDxZ_CtE1W9qFsRCfPIBkvkV4uyAccVn9U",
    authDomain: "photogram-95bfb.firebaseapp.com",
    projectId: "photogram-95bfb",
    storageBucket: "photogram-95bfb.appspot.com",
    messagingSenderId: "863381904435",
    appId: "1:863381904435:web:0b1fdedb7fec0df60c5746",
    measurementId: "G-WLWTRDX4XK"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);
  const db = getFirestore()

export  {app, analytics, auth, db};