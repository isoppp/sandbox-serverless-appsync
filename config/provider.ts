import { AWS } from '@serverless/typescript'

export const provider: AWS['provider'] = {
  name: 'aws',
  runtime: 'nodejs12.x',
  stage: '${opt:stage,"dev"}',
  region: 'ap-northeast-1',
  profile: 'sandbox-serverless-framework',
  apiGateway: {
    minimumCompressionSize: 1024,
    shouldStartNameWithService: true,
  },
  environment: {
    AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
  },
}
