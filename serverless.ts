import type { AWS } from '@serverless/typescript'
import { provider } from './config/provider'
import { custom } from './config/custom'
import { functions } from './config/functions'
import { resources } from './config/resources'

const serverlessConfiguration: AWS = {
  service: 'sandbox-serverless-appsync',
  frameworkVersion: '2',
  plugins: ['serverless-webpack', 'serverless-appsync-plugin'],
  custom,
  provider,
  functions,
  resources,
}

module.exports = serverlessConfiguration
