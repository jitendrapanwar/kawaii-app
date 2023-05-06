import { useEffect } from "react";
import { depositMoney, withdrawMoney, bankrupt } from "../bank/state/reducers/bankReducer"
import { useAppDispatch, useAppSelector } from '../kawaii/kawaii-hooks'
import { RootState } from '../kawaii/store';
import { loginEvent } from "./customEvent";

const BankApp = () => {

  const dispatch = useAppDispatch();
  const currentAmount = useAppSelector((state: RootState) => state.bank.amount)


  useEffect(() => {
    //   const newEvent = function(event: CustomEvent) {
    //     console.log("Whoop!", event.detail);
    //  } as EventListener

    const newEvent = ((event: CustomEvent<any>) => {
      console.log("Whoop!", event.detail);
    }) as EventListener 

    document.addEventListener("login", newEvent);

    return () => document.removeEventListener("login", newEvent);

    //   document.addEventListener("login", ((event: CustomEvent) => {
    //     console.log("Whoop!", event.detail);
    //  }) as EventListener);
  }, [])


  return (
    <div className="bank-app">
      <h1>{currentAmount}</h1>
      <div className="actions">
        <button onClick={() => dispatch(depositMoney(100))}>Deposit</button>
        <button onClick={() => dispatch(withdrawMoney(50))}>Withdraw</button>
        <button onClick={() => dispatch(bankrupt())}>Bankrupt</button>
        <button onClick={() => document.dispatchEvent(loginEvent)}>Login Event</button>
      </div>
    </div>
  )
}

export default BankApp;