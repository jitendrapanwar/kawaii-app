import { fireEvent, render, screen } from '@testing-library/react';
import KawaiiApp from './KawaiiApp';
import {  useAppDispatch, useAppSelector } from './kawaii-hooks';
//import { testAppSelector } from './app-selector';
import { store } from './store';
import { updateMood, updateIllstration } from './kawaii-reducer';

jest.mock('./kawaii-hooks')

describe('App ', () => {
  
  beforeEach(() => {
   // useAppSelector(testAppSelector)    
  })
  
  test('renders cat svg componet ', () => {
    render(<KawaiiApp />);
    const title = screen.getAllByText(/cat/i);
    expect(title[0]).toBeInTheDocument();
  });

  test('check initial active button ', () => {
    render(<KawaiiApp />);
      const sadBtn = screen.getByRole('button', {name: /sad/i});
      expect(sadBtn).toBeInTheDocument();
  });

  test('check all moods ', () => {
    render(<KawaiiApp />);
    const moods = ['sad', 'happy', 'blissful', 'shocked', 'lovestruck','excited', 'ko']
    moods.forEach(mood => {
      const title = screen.getByText(mood);
      expect(title).toBeInTheDocument();
    })
  });
  
  test('should update mood', () => {
    render(<KawaiiApp/>)
    store.dispatch(updateMood('happy'))
    expect(store.getState().illustration.mood).toBe('happy')
    
  })
  test('should switch to another character', () => {
    render(<KawaiiApp/>)
    store.dispatch(updateIllstration('backpack'))
    expect(store.getState().illustration.type).toBe('backpack')    
  })

  afterEach(() => jest.clearAllMocks())
})


