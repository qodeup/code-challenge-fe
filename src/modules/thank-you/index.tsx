import React, { ComponentProps, FC, PropsWithChildren, ReactElement } from "react";
import './thank-you.css';

export interface HeaderProps extends PropsWithChildren<{}> {};

export const Wrapper:FC<HeaderProps> = (props: HeaderProps) => 
  <section id="thank-you">{props.children}</section>

export const Content:FC<HeaderProps> = ({}) => (
    <>
      <div className="title">
        grazie
      </div>
      <div className="subtitle">
        il pagamento è andato a buon fine
      </div>
    </>
  )

export const ThankYou:FC<HeaderProps> = ({}) => {
  return (
      <Wrapper>
        <Content />
      </Wrapper>
  )
};