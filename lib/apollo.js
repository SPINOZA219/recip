import { ApolloClient, InMemoryCache } from "@apollo/client";


export const client = new ApolloClient({
  uri: `https://bestfeed.us/graphql`,
  cache: new InMemoryCache(),
});