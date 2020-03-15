import React, { useContext } from 'react';
import AuthForm from '../components/AuthForm';
import { Context as AuthContext } from '../context/AuthContext';

const SigninScreen = () => {
  const { signin } = useContext(AuthContext);
  return (
    <AuthForm
      title='Sign in to Tracker'
      type='Signin'
      onSubmit={signin}
      linkText="Don't have an account? Sign up now"
      navLink='Signup'
    />
  );
};

SigninScreen.navigationOptions = {
  headerShown: false
};

export default SigninScreen;
