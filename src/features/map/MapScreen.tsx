import React, { useEffect, useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { getLocation } from '../../services/location.service';
import { getBBox } from '../../services/bbox.service';
import { useGetEventsByBBoxQuery } from '../../api/eventsApi';
import { isOnline } from '../../services/network.service';
import { getCache, saveCache } from '../../services/cache.service';
import { CACHE_TTL } from '../../constants/config';
import OfflineBanner from '../offline/OfflineBanner';

export default function MapScreen() {
  const [region, setRegion] = useState<any>(null);
  const [offline, setOffline] = useState(false);

  const bbox = region ? getBBox(region) : null;

  const { data } = useGetEventsByBBoxQuery(bbox!, { skip: !bbox });

  useEffect(() => {
    (async () => {
      const loc = await getLocation();
      setRegion({
        latitude: loc.latitude,
        longitude: loc.longitude,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      });

      const online = await isOnline();
      setOffline(!online);
    })();
  }, []);

  useEffect(() => {
    if (data) saveCache('events', data);
  }, [data]);

  const events = data || getCache('events', CACHE_TTL) || [];

  if (!region) return null;

  return (
    <>
      <OfflineBanner offline={offline} />
      <MapView style={{ flex: 1 }} region={region}>
        {events.map((e: any) => (
          <Marker
            key={e.id}
            coordinate={{
              latitude: e.location.latitude,
              longitude: e.location.longitude,
            }}
            title={e.name}
          />
        ))}
      </MapView>
    </>
  );
}