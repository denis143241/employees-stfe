import React from 'react';
import {AppButton} from "../../components/AppButton/AppButton.jsx";
import {useForm} from "react-hook-form";
import {FormTip, LoginForm, LoginInput, SubmitBlock} from "./Login.styled.jsx";

export const Login = () => {
  const { register, handleSubmit } = useForm()

  const onSubmit = (data, e) => {
    e.preventDefault()
  }

  return (
    <LoginForm onSubmit={handleSubmit(onSubmit)}>
      <LoginInput variant="inside" props={{...register('login')}}>Логин</LoginInput>
      <LoginInput variant="inside" props={{...register('password'), type: 'password'}}>Пароль</LoginInput>
      <SubmitBlock>
        <AppButton variant="large" color="#F4644587">Вход</AppButton>
        <FormTip>Забыли пароль?</FormTip>
      </SubmitBlock>
    </LoginForm>
  );
};