import { fireEvent, render, screen } from '@testing-library/react';
import MoodList from './mood-list';
import { store } from './store';
import { Provider } from 'react-redux';

describe('App ', () => {
  beforeEach(() => {
    render(<Provider store={store}>
      <MoodList />
    </Provider>)
  })

  test('check button click update ', () => {
    const h3 = screen.getByRole('heading');
    expect(h3).toBeInTheDocument();
    expect(h3.textContent).toBe('my mood is: sad')
  });

  test('check button click update ', () => {
    const sadBtn = screen.getByRole('button', { name: /happy/i })
    expect(sadBtn).toBeInTheDocument();
    fireEvent.click(sadBtn)
    expect(store.getState().illustration.mood).toBe('happy')
  });
  afterEach(() => jest.clearAllMocks())
})
