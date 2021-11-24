import React, { ComponentProps, FC, PropsWithChildren, ReactElement } from "react";
import './split-the-bill.css';

export interface HeaderProps extends PropsWithChildren<{}> { };

export const Wrapper: FC<HeaderProps> = (props: HeaderProps) =>
  <section id="split-the-bill">{props.children}</section>

export const Content: FC<HeaderProps> = ({ }) => (
  <>
    <div className="row">
      <div className="col-3">
        <a className="btn">
          <div className="btn-line-1">dividi per</div>
          <div className="btn-line-2">2</div>
        </a>
      </div>
      <div className="col-3">
        <a className="btn">
          <div className="btn-line-1">dividi per</div>
          <div className="btn-line-2">3</div>
        </a>
      </div>
      <div className="col-3">
        <a className="btn">
          <div className="btn-line-1">dividi per</div>
          <div className="btn-line-2">4</div>
        </a>
      </div>
      <div className="col-3">
        <a className="btn">
          <div className="btn-line-1">dividi per</div>
          <div className="btn-line-2">?</div>
        </a>
      </div>

    </div>
  </>
)

export const SplitTheBill: FC<HeaderProps> = ({ }) => {
  return (
    <Wrapper>
      <Content />
    </Wrapper>
  )
};