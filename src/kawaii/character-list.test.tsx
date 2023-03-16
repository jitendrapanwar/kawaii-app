import { fireEvent, render, screen } from '@testing-library/react';
import CharacterList from './character-list';
import { store } from './store';
import { Provider } from 'react-redux';

describe('App ', () => {
  beforeEach(() => {
    render(<Provider store={store}>
      <CharacterList />
    </Provider>)
  })

  test('check button click update ', () => {
    const h3 = screen.getByRole('heading');
    expect(h3).toBeInTheDocument();
    expect(h3.textContent).toBe('Choose Character')
  });

  test('check button click update ', () => {
    const btn = screen.getByRole('button', { name: /backpack/i })
    expect(btn).toBeInTheDocument();
    fireEvent.click(btn)
    expect(store.getState().illustration.type).toBe('backpack')
  });
  afterEach(() => jest.clearAllMocks())
})
