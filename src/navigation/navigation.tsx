import React from 'react';
import { Text, Platform, StatusBar } from 'react-native';
import { createAppContainer, createSwitchNavigator, createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation';

import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import Icon from '../components/Icon';


import ParteDiarioScreen from '../screens/ParteDiarioScreen';
import ParteDiarioAddScreen from '../screens/ParteDiarioAddScreen'
import ParteDiarioEditScreen from '../screens/ParteDiarioEditScreen'
import ParteDiarioDetailsScreen from '../screens/ParteDiarioDetailsScreen'

import AsignacionScreen from '../screens/AsignacionScreen';
import MenuScreen from '../screens/MenuScreen';
import NotificacionScreen from '../screens/NotificacionScreen';
import InicioScreen from '../screens/InicioScreen';

const headerStyle = {
  backgroundColor: '#633689'
};

const InicioStack = createStackNavigator({
  Dashboard: {
    screen: InicioScreen,
    navigationOptions: {
      title: 'Dashboard',
      headerStyle: headerStyle,
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    }
  },
});
const ParteDiarioStack = createStackNavigator({
  List: {
    screen: ParteDiarioScreen,
    navigationOptions: {
      title: 'Parte Diario',
      headerStyle: headerStyle,
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    }
  },
  Create: {
    screen: ParteDiarioAddScreen,
    navigationOptions: {
      title: 'Nuevo Parte Diario',
      headerStyle: headerStyle,
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    }
  },
  Edit: {
    screen: ParteDiarioEditScreen,
    navigationOptions: {
      title: 'Modificar Parte Diario',
      headerStyle: headerStyle,
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    }
  },
  Detail: {
    screen: ParteDiarioDetailsScreen,
    navigationOptions: {
      title: 'Detalle Parte Diario',
      headerStyle: headerStyle,
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    }
  },
});
const AsignacionStack = createStackNavigator({
  List: {
    screen: AsignacionScreen,
    navigationOptions: {
      title: 'Asignaciones Maquinaria',
      headerStyle: headerStyle,
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    }
  },
});
const NotificacionStack = createStackNavigator({
  Inicio: {
    screen: NotificacionScreen,
    navigationOptions: {
      title: 'Notificaciones',
      headerStyle: headerStyle,
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    }
  },
});
const MenuStack = createStackNavigator({
  Menu: {
    screen: MenuScreen,
    navigationOptions: {
      title: 'Menu',
      headerStyle: headerStyle,
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    }
  },
});

const TabNav = createMaterialTopTabNavigator(
  {
    Inicio: {
      screen: InicioStack,
      navigationOptions: {
        tabBarLabel: ({ tintColor }) => (
          <Text style={{ fontSize: 10, color: tintColor }}>
            Inicio
          </Text>
        ),
        tabBarIcon: ({ tintColor }) => <Icon name="A" color={tintColor} />
      }
    },
    ParteDiario: {
      screen: ParteDiarioStack,
      navigationOptions: {
        tabBarLabel: ({ tintColor }) => (
          <Text style={{ fontSize: 10, color: tintColor }}>
            Parte Diario
          </Text>
        ),
        tabBarIcon: ({ tintColor }) => <Icon name="B" color={tintColor} />
      }
    },
    Asignacion: {
      screen: AsignacionStack,
      navigationOptions: {
        tabBarLabel: ({ tintColor }) => (
          <Text style={{ fontSize: 10, color: tintColor }}>
            Asignaciones
          </Text>
        ),
        tabBarIcon: ({ tintColor }) => <Icon name="C" color={tintColor} />
      }
    },
    Notificacion: {
      screen: NotificacionStack,
      navigationOptions: {
        tabBarLabel: ({ tintColor }) => (
          <Text style={{ fontSize: 10, color: tintColor }}>
            Notificationes
          </Text>
        ),
        tabBarIcon: ({ tintColor }) => <Icon name="D" color={tintColor} />
      }
    },
    Menu: {
      screen: MenuStack,
      navigationOptions: {
        tabBarLabel: ({ tintColor }) => (
          <Text style={{ fontSize: 10, color: tintColor }}>
            Menu
          </Text>
        ),
        tabBarIcon: ({ tintColor }) => <Icon name="E" color={tintColor} />
      }
    },
  },
  {
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#FFFFFF',
      //pressColor: '#004D40',
      inactiveTintColor: '#F8F8F8',
      showIcon: true,
      showLabel: true,
      style: {
        backgroundColor: '#633689',
      },
      labelStyle: {
        textAlign: 'center',
      },
      indicatorStyle: {
        borderBottomColor: '#87B56A',
        borderBottomWidth: 2,
      },
    }
  }
);

const rootNavigator = createSwitchNavigator({
  Launch: { screen: SplashScreen },
  Auth: {
    screen: LoginScreen,
    navigationOptions: {
      title: "Sign In",
      headerStyle
    }
  },
  App: {
    screen: TabNav
  }
},
  {
    initialRouteName: 'Launch',
    backBehavior: 'initialRoute'
  });

const AppContainer = createAppContainer(rootNavigator)
export default AppContainer;