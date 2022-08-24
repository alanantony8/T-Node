import React, { useState } from 'react';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import {AmplifySignOut,withAuthenticator,WithAuthenticator} from '@aws-amplify/ui-react';

Amplify.configure(awsconfig);
function App  ()  {
  return (
    <div>
    <AmplifySignOut/>


    </div>
  );
};

export default withAuthenticator(App);