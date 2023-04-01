import { characters, CharacterType } from './moods';
import { updateIllstration } from './kawaii-reducer';
import { useAppDispatch, useAppSelector } from './kawaii-hooks'
import { RootState } from './store';

const CharacterList = () => {
  const dispatch = useAppDispatch();
  const currentCharacter = useAppSelector((state: RootState) => state.illustration.type) as CharacterType
  const handleIllustrationUpdate = (evt:React.MouseEvent<HTMLButtonElement>) => {
    const illustration = (evt.target as HTMLButtonElement).dataset.type as string;
    dispatch(updateIllstration(illustration))
  }

  return (
    <>
      <h3>Choose Character</h3>
      <section id='characters'>
        {Object.values(characters).map(illustration => (
          <button
            data-type={illustration}
            key={illustration}
            className={`${currentCharacter === illustration ? 'selected' : ''}`}
            onClick={handleIllustrationUpdate}>
            {illustration}
          </button>
        ))

        }
      </section>
    </>
  )
}

export default CharacterList