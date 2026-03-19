export type UserRole = 'organizer' | 'visitor';

export interface Location {
  latitude: number;
  longitude: number;
  city: string;
}

export interface Event {
  id: string;
  name: string;
  location: Location;
  schedule: string;
  capacity: number;
  imageUrl?: string;
}

export interface BBox {
  north: number;
  south: number;
  east: number;
  west: number;
}