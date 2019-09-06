import React from 'react';
import { Text, Platform, StatusBar } from 'react-native';
import { createBottomTabNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';

import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import Icon from '../components/Icon';
import ParteDiarioScreen from '../screens/ParteDiarioScreen';
import AsignacionScreen from '../screens/AsignacionScreen';
import MenuScreen from '../screens/MenuScreen';
import NotificacionScreen from '../screens/NotificacionScreen';
import InicioScreen from '../screens/InicioScreen';

const headerStyle = {
  marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
};

const TabNav = createBottomTabNavigator(
  {
    Inicio: {
      screen: InicioScreen,
      navigationOptions: {
        tabBarLabel: ({ tintColor }) => (
          <Text style={{ fontSize: 10, color: tintColor, alignItems: 'center', justifyContent: 'center' }}>
            Inicio
          </Text>
        ),
        tabBarIcon: ({ tintColor }) => <Icon name="A" color={tintColor} />
      }
    },
    ParteDiario: {
      screen: ParteDiarioScreen,
      navigationOptions: {
        tabBarLabel: ({ tintColor }) => (
          <Text style={{ fontSize: 10, color: tintColor, alignItems: 'center', justifyContent: 'center' }}>
            Parte Diario
          </Text>
        ),
        tabBarIcon: ({ tintColor }) => <Icon name="B" color={tintColor} />
      }
    },
    Asignacion: {
      screen: AsignacionScreen,
      navigationOptions: {
        tabBarLabel: ({ tintColor }) => (
          <Text style={{ fontSize: 10, color: tintColor, alignItems: 'center', justifyContent: 'center' }}>
            Asignaciones
          </Text>
        ),
        tabBarIcon: ({ tintColor }) => <Icon name="C" color={tintColor} />
      }
    },
    Notificacion: {
      screen: NotificacionScreen,
      navigationOptions: {
        tabBarLabel: ({ tintColor }) => (
          <Text style={{ fontSize: 10, color: tintColor, alignItems: 'center', justifyContent: 'center' }}>
            Notificationes
          </Text>
        ),
        tabBarIcon: ({ tintColor }) => <Icon name="D" color={tintColor} />
      }
    },
    Menu: {
      screen: MenuScreen,
      navigationOptions: {
        tabBarLabel: ({ tintColor }) => (
          <Text style={{ fontSize: 10, color: tintColor, alignItems: 'center', justifyContent: 'center' }}>
            Menu
          </Text>
        ),
        tabBarIcon: ({ tintColor }) => <Icon name="E" color={tintColor} />
      }
    },
  },
  {
    tabBarOptions: {
      style: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
      },
      activeTintColor: 'orange',
      inactiveTintColor: 'gray'
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
  App: { screen: TabNav }
},
  {
    initialRouteName: 'Launch',
    backBehavior: 'initialRoute'
  });

const AppContainer = createAppContainer(rootNavigator)
export default AppContainer;