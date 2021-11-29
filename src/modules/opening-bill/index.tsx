import React, { ComponentProps, FC, PropsWithChildren, ReactElement } from "react";
import './opening-bill.css';

export interface HeaderProps extends PropsWithChildren<{}> {};

export const Wrapper:FC<HeaderProps> = (props: HeaderProps) => 
  <section id="opening-bill">{props.children}</section>

export const Content:FC<HeaderProps> = ({}) => (
    <>
      <div className="title">
        attendi
      </div>
      <div className="we-are-opening">
        stiamo aprendo il tuo conto
      </div>
    </>
  )

export const Opening:FC<HeaderProps> = ({}) => {
  return (
      <Wrapper>
        <Content />
      </Wrapper>
  )
};