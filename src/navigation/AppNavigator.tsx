import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AuthScreen from '../features/auth/AuthScreen';
import OtpScreen from '../features/auth/OtpScreen';
import MapScreen from '../features/map/MapScreen';
import EventForm from '../features/events/EventForm';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Auth" component={AuthScreen} />
      <Stack.Screen name="OTP" component={OtpScreen} />
      <Stack.Screen name="Carte" component={MapScreen} />
      <Stack.Screen name="Créer" component={EventForm} />
    </Stack.Navigator>
  );
}