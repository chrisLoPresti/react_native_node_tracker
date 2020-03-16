import React, { useState, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';
import NavLink from '../components/NavLink';
import _ from 'lodash';

const AuthForm = ({
  type,
  title,
  onSubmit,
  linkText,
  navLink,
  navLinkParams
}) => {
  const {
    state: { error }
  } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');
  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>{title}</Text>
      </Spacer>
      <Input
        autoCorrect={false}
        autoCapitalize='none'
        style={styles.input}
        label='Email'
        value={email}
        onChangeText={setEmail}
      />
      {error.email && <Text style={styles.error}>{error.email}</Text>}
      <Input
        secureTextEntry
        autoCorrect={false}
        autoCapitalize='none'
        style={styles.input}
        label='Password'
        value={password}
        onChangeText={setPassword}
      />
      {error.password && <Text style={styles.error}>{error.password}</Text>}
      {type === 'SignUp' && (
        <>
          <Input
            secureTextEntry
            autoCorrect={false}
            autoCapitalize='none'
            style={styles.input}
            label='Verify Password'
            value={verifyPassword}
            onChangeText={setVerifyPassword}
          />
          {error.verifyPassword && (
            <Text style={styles.error}>{error.verifyPassword}</Text>
          )}
        </>
      )}
      {error.generic && <Text style={styles.error}>{error.generic}</Text>}
      <Spacer>
        <Button
          title={_.startCase(type)}
          onPress={() => onSubmit({ email, password, verifyPassword })}
        />
      </Spacer>
      <NavLink text={linkText} to={navLink} params={navLinkParams} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250
  },
  input: {
    marginVertical: 10
  },
  error: {
    color: 'red',
    marginHorizontal: 10
  }
});

export default AuthForm;
