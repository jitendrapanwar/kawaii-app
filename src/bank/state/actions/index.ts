import { ActionType } from "../action-types"

interface IDeposit {
  type: ActionType.DEPOSIT
  payload: number
}

interface IWithdraw {
  type: ActionType.WITHDRAW
  payload: number
}

interface IBankrupt {
  type: ActionType.BANKRUPT
}

export type Action = IDeposit | IWithdraw | IBankrupt