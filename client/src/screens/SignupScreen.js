import React, { useContext } from 'react';
import AuthForm from '../components/AuthForm';
import { Context as AuthContext } from '../context/AuthContext';

const SignupScreen = () => {
  const { signup } = useContext(AuthContext);
  return (
    <AuthForm
      title='Sign up for Tracker'
      type='Signup'
      onSubmit={signup}
      linkText='Already have an account? Sign in now'
      navLink='Signin'
    />
  );
};

SignupScreen.navigationOptions = {
  headerShown: false
};

export default SignupScreen;
