import React from 'react';
import { LoginForm } from '../components/forms';
import { Page } from '../utils/styles';

const LoginPage: React.FC = () => {
  return (
    <Page>
      <LoginForm />
    </Page>
  );
};

export default LoginPage;
