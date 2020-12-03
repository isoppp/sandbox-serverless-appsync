import { AWS } from '@serverless/typescript'

// comes from cloud formation resources https://www.serverless.com/framework/docs/providers/aws/guide/resources/#override-aws-cloudformation-resource
export const resources: AWS['resources'] = {
  Resources: {
    usersTable: {
      Type: 'AWS::DynamoDB::Table',
      Properties: {
        TableName: '${self:service}-${opt:stage, self:provider.stage}-users',
        BillingMode: 'PAY_PER_REQUEST',
        AttributeDefinitions: [
          {
            AttributeName: 'email',
            AttributeType: 'S',
          },
        ],
        KeySchema: [
          {
            AttributeName: 'email',
            KeyType: 'HASH',
          },
        ],
        ProvisionedThroughput: {
          ReadCapacityUnits: 0,
          WriteCapacityUnits: 0,
        },
      },
    } as any,
  },
}
