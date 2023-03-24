import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
// import { Provider } from 'react-redux'
import MainContainer from './src/MainContainer';
// import {Mystore} from './redux/store/Store'; 
// import Router from './router';

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
    <MainContainer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: { 
    flex: 1,
    backgroundColor: '#F9FBFC',
  },
});

export default App;
