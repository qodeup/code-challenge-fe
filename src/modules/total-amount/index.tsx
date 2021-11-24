import React, { ComponentProps, FC, PropsWithChildren, ReactElement } from "react";
import './total-amount.css';

export interface HeaderProps extends PropsWithChildren<{}> {};

export const Wrapper:FC<HeaderProps> = (props: HeaderProps) => 
  <div id="total-amount">{props.children}</div>

export const Content:FC<HeaderProps> = ({}) => (
    <>
      <p className="title">
        totale del tavolo
      </p>
      <p className="amount">
        90.00€
      </p>
    </>
  )

export const TotalAmount:FC<HeaderProps> = ({}) => {
  return (
      <Wrapper>
        <Content />
      </Wrapper>
  )
};