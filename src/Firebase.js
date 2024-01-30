
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyAwWr7VEDFUJ4nNNmuFrxMg0ziIYwkrwFY",
    authDomain: "my-kart-auth.firebaseapp.com",
    projectId: "my-kart-auth",
    storageBucket: "my-kart-auth.appspot.com",
    messagingSenderId: "552074582470",
    appId: "1:552074582470:web:c2fb183d9687c903c2bac7"
  };


const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);

export default app;

