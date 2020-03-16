import React, { useEffect, useContext } from 'react';
import { Context as AuthContext } from '../context/AuthContext';

const ResolveAuthScreen = () => {
  const { automaticSignIn } = useContext(AuthContext);

  useEffect(() => {
    automaticSignIn();
  }, []);
  return null;
};

export default ResolveAuthScreen;
