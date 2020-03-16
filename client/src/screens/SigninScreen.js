import React, { useContext } from 'react';
import AuthForm from '../components/AuthForm';
import { Context as AuthContext } from '../context/AuthContext';

const SignInScreen = () => {
  const { signIn } = useContext(AuthContext);
  return (
    <AuthForm
      title='Sign in to Tracker'
      type='SignIn'
      onSubmit={signIn}
      linkText="Don't have an account? Sign up now"
      navLink='SignUp'
    />
  );
};

SignInScreen.navigationOptions = {
  headerShown: false
};

export default SignInScreen;
