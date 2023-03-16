import React from "react";
import {
  Cat,
  Backpack,
  Mug,
  File,
  Folder,
  Browser,
  Chocolate,
  CreditCard,
  Ghost, IceCream, Planet, SpeechBubble, KawaiiMood
} from 'react-kawaii'
import { CharacterType } from "./moods";
import { RootState } from './store';
import { useAppSelector } from './kawaii-hooks'

const Character = () => {
  const currentMood = useAppSelector((state: RootState) => state.illustration.mood) as KawaiiMood
  const currentCharacter = useAppSelector((state: RootState) => state.illustration.type) as CharacterType
  
  const RenderCharacter = () => {
    let component: React.ReactElement
    switch (currentCharacter) {
      case 'cat':
        component = <Cat size={320} mood={currentMood} color='#596881' />
        break;
      case 'backpack':
        component = <Backpack size={320} mood={currentMood} color='#596881' />
        break;
      case 'mug':
        component = <Mug size={320} mood={currentMood} color='#596881' />
        break;
      case 'file':
        component = <File size={320} mood={currentMood} color='#596881' />
        break;
      case 'folder':
        component = <Folder size={320} mood={currentMood} color='#596881' />
        break;
      case 'browser':
        component = <Browser size={320} mood={currentMood} color='#596881' />
        break;
      case 'chocolate':
        component = <Chocolate size={320} mood={currentMood} color='#596881' />
        break;
      case 'creditcard':
        component = <CreditCard size={320} mood={currentMood} color='#596881' />
        break;
      case 'ghost':
        component = <Ghost size={320} mood={currentMood} color='#596881' />
        break;
      case 'icecream':
        component = <IceCream size={320} mood={currentMood} color='#596881' />
        break;
      case 'planet':
        component = <Planet size={320} mood={currentMood} color='#596881' />
        break;
      case 'speechbubble':
        component = <SpeechBubble size={320} mood={currentMood} color='#596881' />
        break;
      default:
        component = <Cat size={320} mood={currentMood} color='#596881' />
    }
    return component;
  }

  return (<RenderCharacter />)

}
export default Character;