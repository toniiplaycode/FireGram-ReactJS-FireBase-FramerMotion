// 3 import dưới là import firebase version 9
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3WSXLdUwNGCMBJpbkYvvR5VkCiXTGF6U",
  authDomain: "firegram-app-reactjs.firebaseapp.com",
  projectId: "firegram-app-reactjs",
  storageBucket: "firegram-app-reactjs.appspot.com",
  messagingSenderId: "511230131169",
  appId: "1:511230131169:web:bb32ed2444f09dc632f0a0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const projectStorage = firebase.storage(); // dùng để upload file
const projectFirestore = firebase.firestore(); // dùng để truy vấn dữ liệu trên firestore
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };

// giải thích code nguyên file này (https://chat.openai.com/c/725193b2-2753-47f0-b5ff-cef7882e9ce0)
