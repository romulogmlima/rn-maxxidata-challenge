import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import Home from '../screens/Home';
import ListProfessionals from '../screens/ListProfessionals';
import ListProfessions from '../screens/ListProfessions';

const { Navigator, Screen } = createNativeStackNavigator();

const AppRoutes = () => (
  <Navigator>
    <Screen name="Home" component={Home} options={{ headerShown: false }} />
    <Screen name="ListProfessionals" component={ListProfessionals} />
    <Screen name="ListProfessions" component={ListProfessions} />
  </Navigator>
);

export default AppRoutes;
