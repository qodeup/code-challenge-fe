import React, { ComponentProps, FC, PropsWithChildren, ReactElement } from "react";
import './tips.css';
import waiter from '../../images/waiters/waiters.png';

export interface HeaderProps extends PropsWithChildren<{}> { };

export const Wrapper: FC<HeaderProps> = (props: HeaderProps) =>
    <section id="tips">{props.children}</section>

export const Content: FC<HeaderProps> = ({ }) => (
    <>
        <div className="row mt-30">
            <div className="col-4">
            <img src={waiter} width="100px" alt="logo" />
            </div>
            <div className="col-8 t-left">
                <div className="fs-16">Lo staff ci ha messo molto impegno nel servire al tavolo!</div>
                <h4 className="mt-10">Come è stato il servizio?</h4>
            </div>
        </div>
        {/* Tip buttons */}
        <div className="row mt-30">
            <div className="col-3">
                <a className="btn-tips">
                    <div className="btn-tips-line-1">Buono</div>
                    <div className="btn-tips-line-2">1€</div>
                </a>
            </div>
            <div className="col-3">
                <a className="btn-tips">
                    <div className="btn-tips-line-1">Ottimo</div>
                    <div className="btn-tips-line-2">3€</div>
                </a>
            </div>
            <div className="col-3">
                <a className="btn-tips">
                    <div className="btn-tips-line-1">Fantastico</div>
                    <div className="btn-tips-line-2">5€</div>
                </a>
            </div>
            <div className="col-3">
                <a className="btn-tips">
                    <div className="btn-tips-line-1">Incredibile!</div>
                    <div className="btn-tips-line-2">?</div>
                </a>
            </div>
        </div>


        {/* Your tips */}
        <div className="row mt-20">
            <div className="col-6">
                <div className="checkout-tips-title">La tua mancia</div>
            </div>
            <div className="col-6">
                <div className="checkout-tips-value">3<small>.00€</small></div>
            </div>
        </div>
    </>
)

export const Tips: FC<HeaderProps> = ({ }) => {
    return (
        <Wrapper>
            <Content />
        </Wrapper>
    )
};