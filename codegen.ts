
import type { CodegenConfig } from '@graphql-codegen/cli';
import { graphqlClient } from './app/api/graphql';


const config: CodegenConfig = {
  overwrite: true,

  schema: [
    {
      'http://localhost:4000/api': {
        headers: {
          "x-auth-userid": "arkadiy.kraportov@clsa.com",
        },
      },
    },
  ],
  documents: "app/**/*.{ts,tsx,graphql}",
  generates: {
    "app/gql/": {
      preset: "client",
      plugins: ['typescript', 'typescript-operations', 'typescript-react-query'],
      config: {
        fetcher: graphqlClient.request.bind(graphqlClient),
      },
    }
  }
};

export default config;
