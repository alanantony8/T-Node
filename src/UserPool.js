import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: 'ap-south-1_nIDwOECBd',
  ClientId: '3o8vatr5lhhe88mmhn1v6u6lhs',
};

export default new CognitoUserPool(poolData);
