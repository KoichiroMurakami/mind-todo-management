import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';

import schema from './schema';

const getUser: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  
  const users = [
    {
      name: "john",
      age: 24,
      password: "a"
    },
    {
      name: "doe",
      age: 22,
      password: "b"
    },
  ]

  return formatJSONResponse({
    message: users,
    event,
  });
};

export const main = middyfy(getUser);
