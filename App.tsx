import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import LogInScreen from './src/screens/LogInScreen';
import {Provider} from 'react-redux';
import store from './src/redux/modules/store';
const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <LogInScreen />
      </SafeAreaView>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ececec',
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
  },
});
