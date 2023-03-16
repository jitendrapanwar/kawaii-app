import { render } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './kawaii/store';

describe('App ', () => {
  test('renders App without crash ', () => {
    const appComonent = render(<Provider store={store}>
      <App />
    </Provider>)
    expect(appComonent.getByTestId('app')).toBeInTheDocument();
  });

  afterEach(() => jest.clearAllMocks())
})


