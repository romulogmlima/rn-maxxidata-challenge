import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import Home from '../screens/Home';
import EditProfession from '../screens/Profession/Edit';
import ListProfessions from '../screens/Profession/List';
import RegisterProfession from '../screens/Profession/Register';
import EditProfessional from '../screens/Professional/Edit';
import ListProfessionals from '../screens/Professional/List';
import RegisterProfessional from '../screens/Professional/Register';

const { Navigator, Screen } = createNativeStackNavigator();

const AppRoutes = () => (
  <Navigator initialRouteName="Home">
    <Screen name="Home" component={Home} options={{ headerShown: false }} />
    <Screen
      name="RegisterProfessional"
      component={RegisterProfessional}
      options={{ title: 'Cadastrar Profissional' }}
    />
    <Screen
      name="ListProfessionals"
      component={ListProfessionals}
      options={{ title: 'Lista de Profissionais' }}
    />
    <Screen
      name="EditProfessional"
      component={EditProfessional}
      options={{ title: 'Editar Profissional' }}
    />
    <Screen
      name="RegisterProfession"
      component={RegisterProfession}
      options={{ title: 'Cadastrar Profissão' }}
    />
    <Screen
      name="EditProfession"
      component={EditProfession}
      options={{ title: 'Editar Profissão' }}
    />
    <Screen
      name="ListProfessions"
      component={ListProfessions}
      options={{ title: 'Lista de Profissões' }}
    />
  </Navigator>
);

export default AppRoutes;
