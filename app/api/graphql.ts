import { GraphQLClient } from "graphql-request";

export const getToken = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('token'); // This ensures localStorage is accessed only in the browser
  }
  return null;
};


export const graphqlClient = new GraphQLClient("https://forums.clsa.com/api", {
  headers: {
    Authorization: `Bearer ${getToken()}`,
  },
});