import { configureStore } from '@reduxjs/toolkit';
import { render as rtlRender } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import kawaiiReducer from './kawaii-reducer';

interface WrapperProps {
    children?: React.ReactNode;
}

function render(ui: any, { initialState = {} } = {}) {

    const store = configureStore({ reducer: kawaiiReducer, preloadedState: initialState });

    const Wrapper = ({ children }: WrapperProps) => {
        return (
            <Provider store={store}>
                {children}
            </Provider>
        );
    };

    return rtlRender(ui, { wrapper: Wrapper });
}
// re-export everything
export * from '@testing-library/react';
// override render method
export { render };