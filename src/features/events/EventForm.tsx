import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { useCreateEventMutation } from '../../api/eventsApi';
import { getLocation } from '../../services/location.service';

export default function EventForm() {
  const [name, setName] = useState('');
  const [createEvent] = useCreateEventMutation();

  return (
    <View>
      <TextInput placeholder="Nom" value={name} onChangeText={setName} />
      <Button title="Créer" onPress={async () => {
        const loc = await getLocation();
        createEvent({
          name,
          location: { ...loc, city: 'Paris' },
          capacity: 100,
          schedule: new Date().toISOString(),
        });
      }} />
    </View>
  );
}