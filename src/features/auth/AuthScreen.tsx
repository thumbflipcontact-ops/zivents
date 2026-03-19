import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useRequestOtpMutation } from '../../api/authApi';

export default function AuthScreen({ navigation }: any) {
  const [email, setEmail] = useState('');
  const [requestOtp] = useRequestOtpMutation();

  return (
    <View>
      <Text>Connexion</Text>
      <TextInput value={email} onChangeText={setEmail} placeholder="Email" />
      <Button title="Envoyer le code" onPress={() => {
        requestOtp(email);
        navigation.navigate('OTP', { email });
      }} />
    </View>
  );
}