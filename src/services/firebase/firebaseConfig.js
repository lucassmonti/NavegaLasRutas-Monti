import { initializeApp} from "firebase/app"
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyB6xF1OknqjXhKqrcVWTIvRcqWJsyH47Js",
    authDomain: "coderhouse-ecommerce-a4837.firebaseapp.com",
    projectId: "coderhouse-ecommerce-a4837",
    storageBucket: "coderhouse-ecommerce-a4837.appspot.com",
    messagingSenderId: "684445166473",
    appId: "1:684445166473:web:dd8cb34e27bb6695050f58"
  };

  const app = initializeApp(firebaseConfig)
  export const db = getFirestore(app)
