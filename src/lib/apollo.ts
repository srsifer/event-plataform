import { ApolloClient, InMemoryCache } from "@apollo/client";


export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4x19d0k01lx01tabkpadeeq/master',
  cache: new InMemoryCache()
})