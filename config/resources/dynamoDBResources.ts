export const dynamoDBResources = {
  todosTable: {
    Type: 'AWS::DynamoDB::Table',
    Properties: {
      TableName: '${self:service}-${self:provider.stage}-todos',
      BillingMode: 'PAY_PER_REQUEST',
      ProvisionedThroughput: {
        ReadCapacityUnits: 0,
        WriteCapacityUnits: 0,
      },
      AttributeDefinitions: [
        {
          AttributeName: 'id',
          AttributeType: 'S',
        },
      ],
      KeySchema: [
        {
          AttributeName: 'id',
          KeyType: 'HASH',
        },
      ],
    },
  } as any,
}
