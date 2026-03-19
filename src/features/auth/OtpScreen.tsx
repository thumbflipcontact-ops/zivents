import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { useVerifyOtpMutation } from '../../api/authApi';

export default function OtpScreen({ route }: any) {
  const [otp, setOtp] = useState('');
  const [verifyOtp] = useVerifyOtpMutation();

  return (
    <View>
      <TextInput value={otp} onChangeText={setOtp} />
      <Button title="Valider" onPress={() => verifyOtp({ ...route.params, otp })} />
    </View>
  );
}