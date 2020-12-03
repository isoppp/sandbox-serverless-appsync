export const cognito = {
  userPool: {
    Type: 'AWS::Cognito::UserPool',
    Properties: {
      AccountRecoverySetting: {
        RecoveryMechanisms: [
          {
            Name: 'verified_email',
            Priority: 1,
          },
        ],
      },
      AdminCreateUserConfig: {
        AllowAdminCreateUserOnly: false,
        InviteMessageTemplate: {
          EmailMessage: 'Your username is {username} and temporary password is {####}.',
          EmailSubject: 'Your temporary password',
          SMSMessage: 'Your username is {username} and temporary password is {####}.',
        },
      },
      AliasAttributes: ['email', 'preferred_username'],
      AutoVerifiedAttributes: ['email'],
      DeviceConfiguration: {
        ChallengeRequiredOnNewDevice: false,
        DeviceOnlyRememberedOnUserPrompt: false,
      },
      EmailConfiguration: {
        EmailSendingAccount: 'COGNITO_DEFAULT',
      },
      EmailVerificationMessage: 'Your verification code is {####}.',
      EmailVerificationSubject: 'Your verification code',
      MfaConfiguration: 'OFF',
      Policies: {
        PasswordPolicy: {
          MinimumLength: 8,
          RequireLowercase: false,
          RequireNumbers: false,
          RequireSymbols: false,
          RequireUppercase: false,
          TemporaryPasswordValidityDays: 365,
        },
      },
      Schema: [
        {
          AttributeDataType: 'String',
          DeveloperOnlyAttribute: false,
          Mutable: true,
          Name: 'email',
          Required: true,
        },
      ],
    },
  } as any,
  userPoolClient: {
    Type: 'AWS::Cognito::UserPoolClient',
    Properties: {
      CallbackURLs: ['http://localhost:3000'],
      ClientName: '${self:service}-${self:provider.stage}-user-pool-client',
      DefaultRedirectURI: 'http://localhost:3000',
      ExplicitAuthFlows: [
        'ALLOW_USER_PASSWORD_AUTH',
        'ALLOW_ADMIN_USER_PASSWORD_AUTH',
        'ALLOW_USER_SRP_AUTH',
        'ALLOW_REFRESH_TOKEN_AUTH',
      ],
      LogoutURLs: ['http://localhost:3000'],
      PreventUserExistenceErrors: 'ENABLED',
      ReadAttributes: ['email', 'preferred_username'],
      RefreshTokenValidity: 10,
      SupportedIdentityProviders: ['COGNITO'],
      UserPoolId: {
        Ref: 'userPool',
      },
      WriteAttributes: ['email', 'preferred_username'],
    },
  },
  userPoolGroupUser: {
    Type: 'AWS::Cognito::UserPoolGroup',
    Properties: {
      Description: 'Common user',
      GroupName: 'user',
      Precedence: 1,
      UserPoolId: {
        Ref: 'userPool',
      },
    },
  } as any,
  userPoolGroupAdmin: {
    Type: 'AWS::Cognito::UserPoolGroup',
    Properties: {
      Description: 'Admin user',
      GroupName: 'admin',
      Precedence: 0,
      UserPoolId: {
        Ref: 'userPool',
      },
    },
  },
}
