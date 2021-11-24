import React, { ComponentProps, FC, PropsWithChildren, ReactElement } from "react";
import svg from '../../logo.svg';

export interface HeaderProps extends PropsWithChildren<{}> {};

export const Logo: FC<{}> = () => 
  <img src={svg} className="App-logo" alt="logo" />;

export const Wrapper:FC<HeaderProps> = (props: HeaderProps) => 
  <header className="App-header">{props.children}</header>

export const Content:FC<HeaderProps> = ({}) => (
    <>
      <p>
        Edit <code>src/App.tsx</code> and save to reload!.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
      </a>
    </>
  )

export const Header:FC<HeaderProps> = ({}) => {
  return (
      <Wrapper>
        <Logo />
        <Content />
      </Wrapper>
  )
};