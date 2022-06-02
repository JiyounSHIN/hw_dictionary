// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDlgYGry6JGgumyVsFfQ1F3LNCuKMD75jc",
    authDomain: "hwdictionary.firebaseapp.com",
    projectId: "hwdictionary",
    storageBucket: "hwdictionary.appspot.com",
    messagingSenderId: "696433750056",
    appId: "1:696433750056:web:6a7bf3b6fe2a0d9ff5051d",
    measurementId: "G-K7MBN4RP6M"
};

initializeApp(firebaseConfig);
// 파이어베이스 파일을 호출하는 그 순간, 초기화 해주겠다는 뜻. 
// Initialize Firebase
// const app = initializeApp(firebaseConfig);

const db = getFirestore();
// App.js 에서 사용할 수 있도록 export 설정. 

export { db };