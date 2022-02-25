import { NavigationContainer } from '@react-navigation/native';
import { setupInterceptors } from '@src/api/instance';
import '@src/config/googleSignIn';
import useCachedResources from '@src/hooks/useCachedResources';
import '@src/i18n';
import Navigation from '@src/navigation';
import { store } from '@src/store';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

const App = () => {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return <AppLoading />;
  } else {
    return (
      <React.Suspense fallback='Loading...'>
        <SafeAreaProvider>
          <Provider store={store}>
            <NavigationContainer>
              <Navigation />
            </NavigationContainer>
          </Provider>
          <StatusBar />
        </SafeAreaProvider>
      </React.Suspense>
    );
  }
};
setupInterceptors(store);

export default App;
