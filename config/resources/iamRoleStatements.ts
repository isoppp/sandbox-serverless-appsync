export const iamRoleStatements = {
  AppSyncLoggingServiceRole: {
    Type: 'AWS::IAM::Role',
    Properties: {
      Path: '/',
      RoleName: 'AppSyncLoggingServiceRole-${self:provider.stage}',
      ManagedPolicyArns: ['arn:aws:iam::aws:policy/service-role/AWSAppSyncPushToCloudWatchLogs'],
      AssumeRolePolicyDocument: {
        Version: '2012-10-17',
        Statement: [
          {
            Effect: 'Allow',
            Principal: {
              Service: ['appsync.amazonaws.com'],
            },
            Action: ['sts:AssumeRole'],
          },
        ],
      },
    },
  },
}
