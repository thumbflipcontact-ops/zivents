import React from 'react';
import { Text } from 'react-native';

export default function OfflineBanner({ offline }: { offline: boolean }) {
  if (!offline) return null;
  return <Text style={{ backgroundColor: 'red' }}>Mode hors ligne</Text>;
}