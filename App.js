import {
  Oxygen_300Light,
  Oxygen_400Regular,
  Oxygen_700Bold,
} from '@expo-google-fonts/oxygen';
import { NavigationContainer } from '@react-navigation/native';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useEffect, useState } from 'react';
import { StatusBar, View } from 'react-native';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import AppRoutes from './src/navigators/app.routes';
import { Store } from './src/redux';
import { theme } from './src/styles/themes';

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync({
          Oxygen_300Light,
          Oxygen_400Regular,
          Oxygen_700Bold,
        });
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <Provider store={Store}>
          <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
            <AppRoutes onLayout={onLayoutRootView} />
          </View>
        </Provider>
        <StatusBar style="auto" />
      </ThemeProvider>
    </NavigationContainer>
  );
}
