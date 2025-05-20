// src/firebase.ts
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBT9h6sE8WW8aH1SomvohLcKPolQpzisXw",
    authDomain: "invitacion-boda-dd688.firebaseapp.com",
    databaseURL: "https://invitacion-boda-dd688-default-rtdb.firebaseio.com",
    projectId: "invitacion-boda-dd688",
    storageBucket: "invitacion-boda-dd688.firebasestorage.app",
    messagingSenderId: "752135848242",
    appId: "1:752135848242:web:c064cba3c052039cf7d72b"
  };

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
