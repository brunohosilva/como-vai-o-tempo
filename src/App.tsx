import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Routes from './Routes';

// import { Container } from './styles';

const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
