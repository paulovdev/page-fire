import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBoBNFLo5KfHL1YLswZ-Ps_kNWL5cAqwBk",
    authDomain: "fir-auth-77afb.firebaseapp.com",
    projectId: "fir-auth-77afb",
    storageBucket: "fir-auth-77afb.appspot.com",
    messagingSenderId: "38048749076",
    appId: "1:38048749076:web:237bfaf1d0cee43dcbf901"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
