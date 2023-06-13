import React from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';
import {useSelector} from 'react-redux';
import {selectUser} from '../redux/modules/user/userSlice';

interface Props {
  signUp: () => void;
  email: string;
  setEmail: (text: string) => void;
  password: string;
  setPassword: (text: string) => void;
}

const Register: React.FC<Props> = ({
  signUp,
  email,
  setEmail,
  password,
  setPassword,
}) => {
  const user = useSelector(selectUser);
  console.log('usuario', user);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="email"
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <TextInput
        placeholder="password"
        onChangeText={text => setPassword(text)}
        value={password}
      />
      <Button onPress={signUp} title="Register" />
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  input: {
    backgroundColor: 'gray',
  },
});
