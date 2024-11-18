import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './Routes';
import Home from '../screens/Home/Home';
import Profile from '../screens/Profile/Profile';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {BackHandler, Text} from 'react-native';
import {ProfileTabTitle} from '../components/ProfileTabTitle/ProfileTabTitle';
import { TabBarIndicator } from 'react-native-tab-view';
import ProfileTabContent from '../components/ProfileTabContent/ProfileTabContent';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const ProfileTabs = createMaterialTopTabNavigator();

const Tab1 = () => {
  return (
    <Text style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      Textman1
    </Text>
  );
};

const Tab2 = () => {
  return (
    <Text style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      Textman2
    </Text>
  );
};

const Tab3 = () => {
  return (
    <Text style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      Textman3
    </Text>
  );
};

export const ProfileTabsNavigation = () => {
  return (
    <ProfileTabs.Navigator screenOptions={{
      tabBarIndicatorStyle:{
        backgroundColor: 'transparent',
      },
      tabBarStyle:{
        zIndex:0,
        elevation:0,
      }
    }}>
      <ProfileTabs.Screen
        name={'Tab1'}
        options={{
          tabBarLabel: ({focused}) => <ProfileTabTitle isFocused={focused} title={'Photos'} />,
        }}
        component={ProfileTabContent}
      />
      <ProfileTabs.Screen
        name={'Tab2'}
        component={ProfileTabContent}
        options={{
          tabBarLabel: ({focused}) => <ProfileTabTitle isFocused={focused} title={'Videos'} />,
        }}
      />
      <ProfileTabs.Screen
        name={'Tab3'}
        component={ProfileTabContent}
        options={{
          tabBarLabel: ({focused}) => <ProfileTabTitle isFocused={focused} title={'Saved'} />,
        }}
      />
    </ProfileTabs.Navigator>
  );
};

const MainMenuNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name={Routes.Home} component={Home} />
      <Drawer.Screen name={Routes.Profile} component={Profile} />
    </Drawer.Navigator>
  );
};

const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{header: () => null, headerShown: false}}
      initialRouteName={Routes.Home}>
      <Stack.Screen name={'Drawer'} component={MainMenuNavigator} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
