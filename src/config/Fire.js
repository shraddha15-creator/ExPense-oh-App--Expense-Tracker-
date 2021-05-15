import firebase from 'firebase';

const config = {
    
        apiKey: "AIzaSyArP_IZAcCXy2Y4cUauKl6AZwfHyNEE1UQ",
        authDomain: "expense-tracker-a51ab.firebaseapp.com",
        projectId: "expense-tracker-a51ab",
        storageBucket: "expense-tracker-a51ab.appspot.com",
        messagingSenderId: "238806271340",
        appId: "1:238806271340:web:30a9d469babf4c5efcdf49",
        measurementId: "G-QEKQC1WRWV"
      
};

const fire = firebase.initializeApp(config);
export default fire;