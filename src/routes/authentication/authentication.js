
import SignInForm from '../../components/sign-in/sign-in-form';
import SignUpForm from '../../components/sign-up/sign-up-form';
import './authentication.styles.scss';

const Authentication = () => {
  return (
    <div className='authentication-container'>           
        <SignInForm/>
        <SignUpForm/>
    </div>
  )
}

export default Authentication