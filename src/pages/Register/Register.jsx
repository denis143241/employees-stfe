import React from 'react';
import {FormTip, LoginForm, LoginInput, SubmitBlock} from "../Login/Login.styled.jsx";
import {AppButton} from "../../components/AppButton/AppButton.jsx";
import {useForm} from "react-hook-form";

export const Register = () => {
  const {register, handleSubmit} = useForm()

  const onSubmit = (data, e) => {
    e.preventDefault()
  }

  return (
    <LoginForm onSubmit={handleSubmit(onSubmit)}>
      <LoginInput variant="inside" props={{...register('login')}}>Логин</LoginInput>
      <LoginInput variant="inside" props={{...register('password'), type: 'password'}}>Пароль</LoginInput>
      <LoginInput variant="inside" props={{...register('RepeatedPassword'), type: 'password'}}>
        Повторите пароль
      </LoginInput>
      <SubmitBlock>
        <AppButton variant="large" color="#F4644587">Зарегистрировться</AppButton>
      </SubmitBlock>
    </LoginForm>
  );
};