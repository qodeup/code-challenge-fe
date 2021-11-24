import React, { ComponentProps, FC, PropsWithChildren, ReactElement } from "react";
import './total-amount.css';

export interface HeaderProps extends PropsWithChildren<{}> {};

export const Wrapper:FC<HeaderProps> = (props: HeaderProps) => 
  <section id="total-amount">{props.children}</section>

export const Content:FC<HeaderProps> = ({}) => (
    <>
      <div className="title">
        totale
      </div>
      <div className="amount">
        90<small>.00€</small>
      </div>
    </>
  )

export const TotalAmount:FC<HeaderProps> = ({}) => {
  return (
      <Wrapper>
        <Content />
      </Wrapper>
  )
};