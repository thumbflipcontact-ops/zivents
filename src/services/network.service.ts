import NetInfo from '@react-native-community/netinfo';

export const isOnline = async () => {
  const s = await NetInfo.fetch();
  return s.isConnected;
};