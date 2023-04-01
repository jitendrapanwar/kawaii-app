import { MOODS } from './moods';
import { KawaiiMood } from 'react-kawaii'
import { updateMood } from './kawaii-reducer';
import { useAppDispatch, useAppSelector } from './kawaii-hooks'
import { RootState } from './store';

const MoodList = () => {
  const dispatch = useAppDispatch();
  const currentMood = useAppSelector((state: RootState) => state.illustration.mood) as KawaiiMood
  
  const handleMoodUpdate = (evt:React.MouseEvent<HTMLButtonElement>) => {
    const mood = (evt.target as HTMLButtonElement).dataset.type as string;
    dispatch(updateMood(mood))    
  }

  return (
    <>
      <h3>my mood is: {currentMood}</h3>
      <section id="moods">
        { Object.values(MOODS).map(mood => (
          <button
            data-testid={mood}
            data-type={mood}
            key={mood}
            className={`${currentMood === mood ? 'selected' : '' }`}
            onClick={handleMoodUpdate}>
            {mood}
          </button>
        ))
        }
      </section>
    </>
  )
}

export default MoodList