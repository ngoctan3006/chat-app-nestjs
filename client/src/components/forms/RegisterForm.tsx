import React from 'react';
import {
  Button,
  InputContainer,
  InputField,
  InputLabel,
} from '../../utils/styles';
import styles from './index.module.scss';
import { Link } from 'react-router-dom';

const RegisterForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <InputContainer>
        <InputLabel htmlFor="email">Email</InputLabel>
        <InputField type="email" id="email" />
      </InputContainer>
      <section className={styles.nameFieldRow}>
        <InputContainer>
          <InputLabel htmlFor="firstName">First Name</InputLabel>
          <InputField type="text" id="firstName" />
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor="lastName">Last Name</InputLabel>
          <InputField type="text" id="lastName" />
        </InputContainer>
      </section>
      <InputContainer>
        <InputLabel htmlFor="password">Password</InputLabel>
        <InputField type="password" id="password" />
      </InputContainer>
      <Button className={styles.button} type="submit">
        Create My Account
      </Button>
      <div className={styles.footerText}>
        <span>Already have an account? </span>
        <Link to="/login">
          <span>Login</span>
        </Link>
      </div>
    </form>
  );
};

export default RegisterForm;
