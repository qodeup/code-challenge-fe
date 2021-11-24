import React, { ComponentProps, FC, PropsWithChildren, ReactElement } from "react";
import './checkout.css';
import payments from '../../images/payments.png';

export interface HeaderProps extends PropsWithChildren<{}> { };

export const Wrapper: FC<HeaderProps> = (props: HeaderProps) =>
    <section id="checkout">{props.children}</section>

export const Content: FC<HeaderProps> = ({ }) => (
    <>
        <h2>Pagamento</h2>
        <div className="checkout-box">
            <div className="row">
                <div className="col-6 t-left">
                    <div>La tua quota</div>
                    <div>Mancia</div>
                </div>
                <div className="col-6 t-right">
                    <div>22.50€</div>
                    <div>3.00€</div>
                </div>
                <div className="col-12">
                    <div className="row mt-20">
                        <div className="col-6 t-left">
                            <div className="mt-6">Paghi</div>
                        </div>
                        <div className="col-6 t-right">
                            <div className="price">25<small>.50€</small></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <img className="mt-20" src={payments} width="100%" alt="payments" />
    </>
)

export const Checkout: FC<HeaderProps> = ({ }) => {
    return (
        <Wrapper>
            <Content />
        </Wrapper>
    )
};