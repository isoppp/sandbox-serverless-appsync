import { AWS } from '@serverless/typescript'
import { appSync } from './custom/appsync'

export const custom: AWS['custom'] = {
  webpack: {
    webpackConfig: './webpack.config.js',
    includeModules: true,
  },
  tags: {
    service: '${self:service}',
    stage: '${self:provider.stage}',
  },
  dynamodb: {
    stages: ['dev', 'stg', 'prod'],
    start: {
      port: 8000,
      inMemory: true,
    },
  },
  appSync,
}
