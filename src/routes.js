import React from 'react';
import { createAppContainer, createStackNavigator, HeaderBackButton } from 'react-navigation';

import Orcamentos from './pages/Orcamentos';
import Detalhes from './pages/Detalhes';

export default createAppContainer(
    createStackNavigator({
        Orcamentos, 
        Detalhes,
    }, {
        initialRouteName: 'Orcamentos',
        defaultNavigationOptions: {
            headerTintColor: '#fff',
            headerBackTitle: null,
            headerStyle: {
                backgroundColor: "#2196f3",
              
            }
        },
        mode: 'modal' 
    }
    )
) 