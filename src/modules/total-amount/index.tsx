import React, { ComponentProps, FC, PropsWithChildren, ReactElement, useEffect } from "react";
import './total-amount.css';
// eslint-disable-next-line no-use-before-define
import socketClient from "socket.io-client";
const SERVER = "http://127.0.0.1:8080";

export interface HeaderProps extends PropsWithChildren<{}> { };

interface ContentProps {
    totalAmount?: any;
    paidAmount?: any;
    remainingAmount?: any;
}

export const Wrapper: FC<HeaderProps> = (props: HeaderProps) =>
    <section id="total-amount">{props.children}</section>

export const Content: FC<ContentProps> = (props: ContentProps) => {
    return (
        <>
            <div className="title">
                total bill
            </div>
            <div className="amount">
                {/* {} */}
                {props.remainingAmount !== 0 ? props.totalAmount : 'BILL PAID Thank you'}
            </div>
            <div className="already-paid mt-40">
                <div className="row">
                    {props.paidAmount !== 0 ?
                    <> <div className="col-6 t-left">
                        Already paid
                    </div>
                    <div className="col-6 t-right qodeup-color">
                        {props.paidAmount}<small>.00€</small>
                    </div></> : <></>}
                </div>
                {props.remainingAmount !== 0 ? <div className="row mt-10">
                    <div className="col-6 t-left">
                        Remaining to pay
                    </div>
                    <div className="col-6 t-right qodeup-color">
                        {props.remainingAmount}<small>.00€</small>
                    </div>
                </div> : <div></div>}
                
            </div>
        </>
    );
}


export const TotalAmount: FC<HeaderProps> = ({ }) => {
    const [totalAmount, setTotalAmount] = React.useState('')
    const [paidAmount, setPaidAmount] = React.useState('')
    const [remainingAmount, setRemainingAmount] = React.useState('')
    var socket = socketClient(SERVER);
    useEffect(() => {
        socket.on('totalAmount', (obj) => {
            if (obj.amount !== totalAmount) setTotalAmount(obj.amount);
        });
        socket.on('updateAmount', (obj) => {
            if (obj.paid !== paidAmount) setPaidAmount(obj.paid);
            if (obj.remaining !== remainingAmount) setRemainingAmount(obj.remaining);
        })
    })
    
    return (
        <Wrapper>
            <Content totalAmount={totalAmount} paidAmount={paidAmount} remainingAmount={remainingAmount}  />
        </Wrapper>
    )
};