import { useEffect, useState } from 'react';
import warrior_card from './assets/warrior_card.png';
import weapons_card from './assets/weapons_card.png';
import experience_card from './assets/experience_card.png';
import './App.scss';

const STATES = {
  START: 'start',
  WARRIOR: 'warrior',
  WEAPONS: 'weapons',
  EXPERIENCE: 'experience',
};

const STATE_ORDER = [STATES.START, STATES.WARRIOR, STATES.WEAPONS, STATES.EXPERIENCE];

function App() {
  const [currentStep, setCurrentStep] = useState(STATES.START);

  const handleImageClick = (id: string) => {
    // Get the current index and the index of the clicked state
    const currentIndex = STATE_ORDER.indexOf(currentStep);
    const nextIndex = STATE_ORDER.indexOf(id);

    // Only update the state if the clicked state is the same or ahead in the hierarchy
    if (nextIndex > currentIndex) {
      setCurrentStep(id);
      console.log(`state changed to ${id}`);
    }
  };

  useEffect(() => {
    console.log('🚀 ~ currentStep:', currentStep);
  }, [currentStep]);

  return (
    <div className='root'>
      <div className='backgroundContainer' />
      <div className='imageContainer'>
        <img
          onClick={() => handleImageClick(STATES.WARRIOR)}
          src={warrior_card}
          className='cards'
          alt='a warrior card image'
        />
        <img
          onClick={() => handleImageClick(STATES.WEAPONS)}
          src={weapons_card}
          className='cards nextCard'
          alt='a weapons card image'
        />
        <img
          onClick={() => handleImageClick(STATES.EXPERIENCE)}
          src={experience_card}
          className='cards nextCard'
          alt='a experience card image'
        />
      </div>
    </div>
  );
}

export default App;
