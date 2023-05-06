import { fireEvent, render, screen } from "@testing-library/react";
import BankApp from "./BankApp";
import { store } from '../kawaii/store';
import { Provider } from 'react-redux';

describe("BankApp", () => {
  beforeEach(() => {
    render(<Provider store={store}>
      <BankApp />
    </Provider>)
  })
  test("render without crash", () => {
    const h1 = screen.getByRole('heading');
    expect(h1).toBeInTheDocument();
    expect(h1.textContent).toBe("0")
  })
  test("deposit amount", () => {
    const btn = screen.getByRole('button', { name: /deposit/i })
    expect(btn).toBeInTheDocument();
    fireEvent.click(btn)
    expect(store.getState().bank.amount).toBe(100)
  })

  test("withdraw amount", () => {
    const btn = screen.getByRole('button', { name: /withdraw/i })
    expect(btn).toBeInTheDocument();
    fireEvent.click(btn)
    expect(store.getState().bank.amount).toBe(50)
  })

  test("bankrupt ", () => {
    const btn = screen.getByRole('button', { name: /bankrupt/i })
    expect(btn).toBeInTheDocument();
    fireEvent.click(btn)
    expect(store.getState().bank.amount).toBe(0)
  })
})