import { initializeApp } from "firebase/app";
import { 
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
} from 'firebase/auth';

import{
  getFirestore,
  doc, 
  getDoc,
  setDoc
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD1yJFSG5evHPTKEgLQJmpjJk0569M2-iU",
  authDomain: "kings-clothing-db-96fb4.firebaseapp.com",
  projectId: "kings-clothing-db-96fb4",
  storageBucket: "kings-clothing-db-96fb4.appspot.com",
  messagingSenderId: "194072320474",
  appId: "1:194072320474:web:47f3cc0ed6b032595cc8e3"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async(userAuth)=>{
  const userDocRef = doc(db, 'users', userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot)

  if (!userSnapshot.exists()){
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error){
      console.log('error creating user', error.message);
    }
  }

  return userDocRef;

} 

