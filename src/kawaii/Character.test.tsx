import Character from './Character';
import { render } from './test.util';
import { CharacterType } from './moods';

describe('Character ', () => {

  const setupCharacter = (type:CharacterType) => {
    const component = render(<Character />, {
      initialState: { illustration: { mood: 'sad', type: type } },
    })
    return component;
  }

  test('should initialize to backpack character', () => {
    const component = setupCharacter('backpack')
    expect(component).toBeTruthy()   
  })

  test('should initialize to file character', () => {
    const component = setupCharacter('file')
    expect(component).toBeTruthy()
  })

  test('should initialize to mug character', () => {
    const component = setupCharacter('mug')
    expect(component).toBeTruthy()
  })

  test('should initialize to folder character', () => {
    const component = setupCharacter('folder')
    expect(component).toBeTruthy()
  })

  test('should initialize to browser character', () => {
    const component = setupCharacter('browser')
    expect(component).toBeTruthy()
  })

  test('should initialize to chocolate character', () => {
    const component = setupCharacter('chocolate')
    expect(component).toBeTruthy()
  })

  test('should initialize to creditcard character', () => {
    const component = setupCharacter('creditcard')
    expect(component).toBeTruthy()
  })

  test('should initialize to ghost character', () => {
    const component = setupCharacter('ghost')
    expect(component).toBeTruthy()
  })

  test('should initialize to icecream character', () => {
    const component = setupCharacter('icecream')
    expect(component).toBeTruthy()
  })

  test('should initialize to planet character', () => {
    const component = setupCharacter('planet')
    expect(component).toBeTruthy()
  })

  test('should initialize to speechbubble character', () => {
    const component = setupCharacter('speechbubble')
    expect(component).toBeTruthy()
  })


  afterEach(() => jest.clearAllMocks())
})


