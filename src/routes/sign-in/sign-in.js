
import SignUpForm from '../../components/sign-up/sign-up-form';
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils'

const SignIn = () => {
  const logGoogleUser = async()=>{
    const { user } = await signInWithGooglePopup();
     const userDocRef = await createUserDocumentFromAuth(user);
  };


  return (
    <div>
        <h1>Sign In Page</h1>
        <button onClick={logGoogleUser}>Sign In With Google Popup</button>
        <SignUpForm/>
    </div>
  )
}

export default SignIn