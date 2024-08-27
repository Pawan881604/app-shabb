import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '@screens/HomeScreen'; // Adjust import paths as needed
import ProfileScreen from '@screens/ProfileScreen';
import LoginScreen from '@screens/LoginScreen';
import OTPScreen from '../screens/OTPScreen';

const Tab = createBottomTabNavigator(); // Create the Tab Navigator

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false, // Hide the header if desired
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Login" component={LoginScreen} />
      <Tab.Screen name="OTPScreen" component={OTPScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
