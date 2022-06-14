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
    <Screen
      name="ListProfessionals"
      component={ListProfessionals}
      options={{ title: 'Lista de Profissionais' }}
    />
    <Screen
      name="ListProfessions"
      component={ListProfessions}
      options={{ title: 'Lista de Profissões' }}
    />
    <Screen
      name="RegisterProfessional"
      component={RegisterProfessional}
      options={{ title: 'Cadastrar Profissional' }}
    />
    <Screen
      name="RegisterProfession"
      component={RegisterProfession}
      options={{ title: 'Cadastrar Profissão' }}
    />
  </Navigator>
);

export default AppRoutes;
