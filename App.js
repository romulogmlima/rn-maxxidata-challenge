import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import AppRoutes from './src/navigators/app.routes';
import { Store } from './src/redux';
import { theme } from './src/styles/themes';

export default function App() {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <Provider store={Store}>
          <AppRoutes />
        </Provider>
        <StatusBar style="auto" />
      </ThemeProvider>
    </NavigationContainer>
  );
}
