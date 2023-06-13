import {View} from 'react-native';
import React, {useState} from 'react';
import Register from '../components/Register';
import LogIn from '../components/LogIn';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import {auth} from '../../firebase';

const LogInScreen = () => {
  const [logInEmail, setLogInEmail] = useState<string>('');
  const [logInPassword, setLogInPassword] = useState<string>('');
  const [signUpEmail, setSignUpEmail] = useState<string>('');
  const [signUpPassword, setSignUpPassword] = useState<string>('');

  const logIn = () => {
    signInWithEmailAndPassword(auth, logInEmail, logInPassword)
      .then(userCredential => {
        console.log('usuario', userCredential);
      })
      .catch(error => console.log('errrrorroroor', error));
  };

  const signUp = () => {
    createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
      .then(userCredential => {
        console.log(userCredential);
      })
      .catch(error => {
        console.log('errrorrrrrr', error);
      });
  };

  return (
    <View>
      <LogIn
        logIn={logIn}
        email={logInEmail}
        password={logInPassword}
        setEmail={setLogInEmail}
        setPassword={setLogInPassword}
      />
      <Register
        signUp={signUp}
        email={signUpEmail}
        password={signUpPassword}
        setEmail={setSignUpEmail}
        setPassword={setSignUpPassword}
      />
    </View>
  );
};

export default LogInScreen;
