import React, { useContext } from 'react';
import AuthForm from '../components/AuthForm';
import { Context as AuthContext } from '../context/AuthContext';

const SignUpScreen = () => {
  const { signUp } = useContext(AuthContext);
  return (
    <AuthForm
      title='Sign up for Tracker'
      type='SignUp'
      onSubmit={signUp}
      linkText='Already have an account? Sign in now'
      navLink='SignIn'
    />
  );
};

SignUpScreen.navigationOptions = {
  headerShown: false
};

export default SignUpScreen;
