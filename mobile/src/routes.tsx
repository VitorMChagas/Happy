import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import OrphanagesMap from './pages/OrphanagesMap';
import OrphanageDetails from './pages/OrphanageDetails';
import OrphanagesMapPosition from './pages/CreateOrphanage/SelectMapPosition';
import OrphanageData from './pages/CreateOrphanage/OrphanageData';

import Header from './components/Header';

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }} >
        <Screen
          name="OrphanagesMap"
          component={OrphanagesMap}
        />

        <Screen
          name="OrphanageDetails"
          component={OrphanageDetails}
          options={{ 
              headerShown: true,
              header: () => <Header showCancel={false} title="Orfanato" />
          }}
        />

        <Screen
          name="OrphanagesMapPosition"
          component={OrphanagesMapPosition}
          options={{ 
            headerShown: true,
            header: () => <Header title="Selecione no mapa" />
          }}
        />

        <Screen
          name="OrphanageData"
          component={OrphanageData}
          options={{ 
            headerShown: true,
            header: () => <Header title="Informe os dados" />
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}
