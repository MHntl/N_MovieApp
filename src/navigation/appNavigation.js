import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import TabNavigation from './tabNavigation';

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  );
};

export default AppNavigation;
