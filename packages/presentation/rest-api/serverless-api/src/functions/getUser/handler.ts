import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import schema from './schema';
import { DynamoDB } from 'aws-sdk'

const getUser: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {

  const dynamodb = process.env.IS_OFFLINE
  ? new DynamoDB({
      region: 'localhost',
      endpoint: 'http://localhost:8000',
    })
  : new DynamoDB()

  const result = await dynamodb.scan({
    TableName: "test"
  }).promise();

  console.log(result);
  const data = result.Items;

  return formatJSONResponse({
    data,
    event,
  });
};

export const main = middyfy(getUser);
