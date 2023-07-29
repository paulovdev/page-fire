import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDUdtmbxHiteeQO_p18QroUgyNR88qmv_Y",
    authDomain: "fire-auth-f4834.firebaseapp.com",
    projectId: "fire-auth-f4834",
    storageBucket: "fire-auth-f4834.appspot.com",
    messagingSenderId: "791122607032",
    appId: "1:791122607032:web:15c1d1811ff7899d2eed4d"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;