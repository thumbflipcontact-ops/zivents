export const getBBox = (region: any) => ({
  north: region.latitude + region.latitudeDelta,
  south: region.latitude - region.latitudeDelta,
  east: region.longitude + region.longitudeDelta,
  west: region.longitude - region.longitudeDelta,
});