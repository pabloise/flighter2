import React from 'react';
import {Button, TextInput, View} from 'react-native';

interface Props {
  logIn: () => void;
  email: string;
  setEmail: (text: string) => void;
  password: string;
  setPassword: (text: string) => void;
}

const LogIn: React.FC<Props> = ({
  logIn,
  email,
  setEmail,
  password,
  setPassword,
}) => {
  return (
    <View>
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
      <Button onPress={logIn} title="entrarrrrr" />
    </View>
  );
};

export default LogIn;
