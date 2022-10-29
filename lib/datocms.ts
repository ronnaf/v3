import { GraphQLClient } from "graphql-request";

interface Args {
  query: string;
  variables?: object;
}

export function request({ query, variables }: Args) {
  const endpoint = `https://graphql.datocms.com/`;

  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
    },
  });

  return client.request(query, variables);
}
