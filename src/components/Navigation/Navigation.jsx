import React, {useEffect, useState} from 'react';
import {UserAvatar} from "../UserAvatar/UserAvatar.jsx";
import {MainContainer} from "../components.styled.jsx";
import {
  NavigationContent,
  NavigationItem,
  NavigationLeftSide,
  NavigationLink,
  NavigationRightSide,
  NavigationWrapper,
  SignInButton
} from "./Navigation.styled.jsx";
import {useLocation} from "react-router-dom";

const resolvedUrls = ['/contacts', '/tariffs']

export const Navigation = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isShowSignInBtn, setIsShowSignInBtn] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (resolvedUrls.includes(location.pathname)) {
      return setIsShowSignInBtn(true)
    }
    return setIsShowSignInBtn(false)
  }, [location])

  return (
    <NavigationWrapper>
      <MainContainer>
        <NavigationContent>
          <NavigationLeftSide>
            <NavigationItem>
              <NavigationLink to='/'>Проекты</NavigationLink>
            </NavigationItem>
            <NavigationItem>
              <NavigationLink to='/board'>Доска задач</NavigationLink>
            </NavigationItem>
            <NavigationItem>
              <NavigationLink to='/employees'>Список сотрудников</NavigationLink>
            </NavigationItem>
          </NavigationLeftSide>
          <NavigationRightSide>
            {isShowSignInBtn && (
              <SignInButton>
                {isLoggedIn ? 'Выход' : 'Вход'}
              </SignInButton>
            )}
            <UserAvatar/>
          </NavigationRightSide>
        </NavigationContent>
      </MainContainer>
    </NavigationWrapper>
  );
};