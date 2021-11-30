import React, { ComponentProps, FC, PropsWithChildren, ReactElement } from "react";
import './already-paid.css';

export interface HeaderProps extends PropsWithChildren<{}> {};

export const Wrapper:FC<HeaderProps> = (props: HeaderProps) => 
  <section id="already-paid">{props.children}</section>

export const Content:FC<HeaderProps> = ({}) => (
    <>
      <div className="title">
        pagato
      </div>
      <div className="subtitle">
        il conto è stato saldato per intero!
      </div>
    </>
  )

export const AlreadyPaid:FC<HeaderProps> = ({}) => {
  return (
      <Wrapper>
        <Content />
      </Wrapper>
  )
};