import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import Home from '../screens/Home';
import ListProfessionals from '../screens/ListProfessionals';
import ListProfessions from '../screens/ListProfessions';
import RegisterProfession from '../screens/RegisterProfession';
import RegisterProfessional from '../screens/RegisterProfessional';

const { Navigator, Screen } = createNativeStackNavigator();

const AppRoutes = () => (
  <Navigator>
    <Screen name="Home" component={Home} options={{ headerShown: false }} />
    <Screen name="ListProfessionals" component={ListProfessionals} />
    <Screen name="ListProfessions" component={ListProfessions} />
    <Screen name="RegisterProfessional" component={RegisterProfessional} />
    <Screen name="RegisterProfession" component={RegisterProfession} />
  </Navigator>
);

export default AppRoutes;
