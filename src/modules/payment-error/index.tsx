import React, { ComponentProps, FC, PropsWithChildren, ReactElement } from "react";
import './payment-error.css';

export interface HeaderProps extends PropsWithChildren<{}> {};

export const Wrapper:FC<HeaderProps> = (props: HeaderProps) => 
  <section id="payment-error">{props.children}</section>

export const Content:FC<HeaderProps> = ({}) => (
    <>
      <div className="title">
      ⚠️
      <br />
        errore
      </div>
      <div className="subtitle">
        il pagamento non è andato a buon fine
      </div>
      <div className="description">
        controlla che il metodo di pagamento utilizzato sia corretto
      </div>
    </>
  )

export const PaymentError:FC<HeaderProps> = ({}) => {
  return (
      <Wrapper>
        <Content />
      </Wrapper>
  )
};