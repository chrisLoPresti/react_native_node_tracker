import React, { useContext } from 'react';
import AuthForm from '../components/AuthForm';
import { Context as AuthContext } from '../context/AuthContext';

const SignUpScreen = () => {
  const { SignUp } = useContext(AuthContext);
  return (
    <AuthForm
      title='Sign up for Tracker'
      type='SignUp'
      onSubmit={SignUp}
      linkText='Already have an account? Sign in now'
      navLink='SignIn'
    />
  );
};

SignUpScreen.navigationOptions = {
  headerShown: false
};

export default SignUpScreen;
