import { baseApi } from './baseApi';
import { Event, BBox } from '../types';

export const eventsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    // ✅ Fetch events within visible map area (scalable)
    getEventsByBBox: builder.query<Event[], BBox>({
      query: (bbox) => ({
        url: '/events',
        params: {
          north: bbox.north,
          south: bbox.south,
          east: bbox.east,
          west: bbox.west,
        },
      }),
    }),

    // ✅ Create new event (Organizer)
    createEvent: builder.mutation<Event, Partial<Event>>({
      query: (body) => ({
        url: '/events',
        method: 'POST',
        body,
      }),
    }),

    // ✅ Optional: update event (future-safe)
    updateEvent: builder.mutation<Event, { id: string; data: Partial<Event> }>({
      query: ({ id, data }) => ({
        url: `/events/${id}`,
        method: 'PUT',
        body: data,
      }),
    }),

    // ✅ Optional: delete event (future-safe)
    deleteEvent: builder.mutation<{ success: boolean }, string>({
      query: (id) => ({
        url: `/events/${id}`,
        method: 'DELETE',
      }),
    }),

  }),
});

export const {
  useGetEventsByBBoxQuery,
  useCreateEventMutation,
  useUpdateEventMutation,
  useDeleteEventMutation,
} = eventsApi;