import Character from './Character';
import CharacterList from './character-list';
import MoodList from './mood-list';

const KawaiiApp = () => {
  return (
    <>
      <CharacterList/>
      <br/>
      <Character />
      <br/>
      <MoodList />
      </>
  );
}

export default KawaiiApp;
