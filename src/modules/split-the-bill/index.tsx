import React, { ComponentProps, FC, PropsWithChildren, ReactElement } from "react";
import './split-the-bill.css';

export interface HeaderProps extends PropsWithChildren<{}> { };

export const Wrapper: FC<HeaderProps> = (props: HeaderProps) =>
    <section id="split-the-bill">{props.children}</section>

export const Content: FC<HeaderProps> = ({ }) => (
    <>
        {/* Divide-by 2, 3, 4 */}
        <h3>Come vuoi dividere il conto?</h3>
        <div className="row">
            <div className="col-3">
                <a className="btn">
                    <div className="btn-line-sm">dividi per</div>
                    <div className="btn-line-lg">2</div>
                </a>
            </div>
            <div className="col-3">
                <a className="btn">
                    <div className="btn-line-sm">dividi per</div>
                    <div className="btn-line-lg">3</div>
                </a>
            </div>
            <div className="col-3">
                <a className="btn">
                    <div className="btn-line-sm">dividi per</div>
                    <div className="btn-line-lg">4</div>
                </a>
            </div>
            <div className="col-3">
                <a className="btn">
                    <div className="btn-line-sm">dividi per</div>
                    <div className="btn-line-lg">?</div>
                </a>
            </div>
        </div>

        {/* Pay for everyone - Custom amount */}
        <div className="row mt-10">
            <div className="col-6">
                <a className="btn">
                    <div className="btn-line-md">🥳</div>
                    <div className="btn-line-md">Paga per tutti</div>
                </a>
            </div>
            <div className="col-6">
                <a className="btn">
                    <div className="btn-line-md">Quota</div>
                    <div className="btn-line-md">personalizzata</div>
                </a>
            </div>
        </div>

        {/* Your share */}
        <div className="row mt-30">
            <div className="col-6">
                <div className="checkout-quote-title">La tua quota</div>
            </div>
            <div className="col-6">
            <div className="checkout-quote-value">22<small>.50€</small></div>
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