import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type Channel = "redux" | "general";

export interface ChatMessage {
  id: number;
  channel: Channel;
  userName: string;
  text: string;
}

// initiate empty api service that will inject endpoints later
export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000",
  }),
  endpoints: (build) => ({
    getMessages: build.query<ChatMessage[], Channel>({
      query: (channel) => `messages/${channel}`,
      async onCacheEntryAdded(
        arg,
        { updateCachedData, cacheDataLoaded, cacheEntryRemoved }
      ) {
        // create a websocket connection when the cache subscription starts
        const ws = new WebSocket("ws://localhost:4000");
        try {
          // wait for the initial query to resolve before proceeding
          await cacheDataLoaded;

          // when data is received from the socket connection to the server,
          // if it is a message and for the appropriate channel,
          // update our query result with the received message
          const listener = (event: MessageEvent) => {
            const data = JSON.parse(event.data);

            updateCachedData((draft) => {
              draft.push(data);
            });
          };

          ws.addEventListener("message", listener);
        } catch {
          // no-op in case `cacheEntryRemoved` resolves before `cacheDataLoaded`,
          // in which case `cacheDataLoaded` will throw
        }
        // cacheEntryRemoved will resolve when the cache subscription is no longer active
        await cacheEntryRemoved;
        // perform cleanup steps once the `cacheEntryRemoved` promise resolves
        ws.close();
      },
    }),
  }),
});

export const { useGetMessagesQuery } = api;
