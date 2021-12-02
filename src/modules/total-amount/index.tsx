import React, { ComponentProps, FC, PropsWithChildren, ReactElement } from "react";
import './total-amount.css';

export interface HeaderProps extends PropsWithChildren<{}> { };

export const Wrapper: FC<HeaderProps> = (props: HeaderProps) =>
    <section id="total-amount">{props.children}</section>

export const Content: FC<HeaderProps> = ({ }) => (
    <>
        <div className="title">
            total bill
        </div>
        <div className="amount">
            --
        </div>
        <div className="already-paid mt-40">
            <div className="row">
                <div className="col-6 t-left">
                    Already paid
                </div>
                <div className="col-6 t-right qodeup-color">
                    0<small>.00€</small>
                </div>
            </div>
            <div className="row mt-10">
                <div className="col-6 t-left">
                    Remaining to pay
                </div>
                <div className="col-6 t-right qodeup-color">
                    0<small>.00€</small>
                </div>
            </div>
        </div>
    </>
)

export const TotalAmount: FC<HeaderProps> = ({ }) => {
    return (
        <Wrapper>
            <Content />
        </Wrapper>
    )
};