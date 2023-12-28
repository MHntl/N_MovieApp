import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppNavigation from './src/navigation/appNavigation';
import {AppProvider} from './src/providers/AppProvider';

const App = () => {
  return (
    <AppProvider>
      <AppNavigation />
    </AppProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
