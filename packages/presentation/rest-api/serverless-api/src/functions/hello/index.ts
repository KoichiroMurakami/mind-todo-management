import schema from './schema';
import { handlerPath } from '@libs/handler-resolver';
// https://rl7r0thjhk.lambda-url.ap-northeast-1.on.aws/hello
export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'post',
        path: 'hello',
        request: {
          schemas: {
            'application/json': schema,
          },
        },
      },
    },
  ],
};
