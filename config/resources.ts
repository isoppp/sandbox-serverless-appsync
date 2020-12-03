import { AWS } from '@serverless/typescript'
import { dynamoDBResources } from './resources/dynamoDBResources'
import { cognito } from './resources/cognito'

// comes from cloud formation resources https://www.serverless.com/framework/docs/providers/aws/guide/resources/#override-aws-cloudformation-resource
export const resources: AWS['resources'] = {
  Resources: {
    ...dynamoDBResources,
    ...cognito,
  },
}
