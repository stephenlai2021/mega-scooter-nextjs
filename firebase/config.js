import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  // apiKey: process.env.NEXT_PUBLIC_APIKEY,
  // authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  // databaseURL: process.env.NEXT_PUBLIC_DATABASE_URL,
  // projectId: process.env.NEXT_PUBLIC_PROJECTID,
  // storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  // messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDERID,
  // appId: process.env.NEXT_PUBLIC_APPID,

  apiKey: "AIzaSyBm9VXXj0pjKwkWrr4lJqsGrpBHkLUdRho",
  authDomain: "udemy-course-nextjs.firebaseapp.com",
  databaseURL: "https://udemy-course-nextjs-default-rtdb.firebaseio.com",
  projectId: "udemy-course-nextjs",
  storageBucket: "udemy-course-nextjs.appspot.com",
  messagingSenderId: "562793526418",
  appId: "1:562793526418:web:e1019ac3cb79070bd2a24b"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app()
}

const auth = firebase.auth()
const db = firebase.firestore()

export { auth, db }