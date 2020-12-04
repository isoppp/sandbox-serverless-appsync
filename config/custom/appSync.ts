import { mappingTemplates } from './appsync/mappingTemplates'
import { dataSources } from './appsync/dataSources'

export const appSync = {
  name: 'PrivateAppsyncEndpoint',
  authenticationType: 'AMAZON_COGNITO_USER_POOLS',
  schema: ['schema.graphql'],
  // caching: {} // you can use cache
  userPoolConfig: {
    defaultAction: 'ALLOW',
    userPoolId: {
      Ref: 'userPool',
    },
  },
  logConfig: {
    loggingRoleArn: {
      'Fn::GetAtt': ['AppSyncLoggingServiceRole', 'Arn'],
    },
    level: 'ERROR',
    excludeVerboseContent: false,
  },
  mappingTemplatesLocation: 'appsync/resolvers',
  mappingTemplates,
  dataSources,
}
