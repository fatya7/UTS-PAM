/* eslint-disable prettier/prettier */
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../pages/Home';
import Detail from '../pages/Detail';
import Profile from '../pages/Profile';
const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{title: 'Welcome'}}
        />

         </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Router;
