import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import warrior_card from '@/assets/warrior_card.png';
import weapons_card from '@/assets/weapons_card.png';
import experience_card from '@/assets/experience_card.png';
import { MOVIES_PATH } from '../Movies';
import './MedievalHome.scss';

export const MEDIEVAL_HOME_PATH = '/MedievalHome/';

const STATES = {
  START: 'start',
  WARRIOR: 'warrior',
  WEAPONS: 'weapons',
  EXPERIENCE: 'experience',
};

const STATE_ORDER = [STATES.START, STATES.WARRIOR, STATES.WEAPONS, STATES.EXPERIENCE];

export function MedievalHome() {
  const navigate = useNavigate();
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

  const handleButtonClick = () => {
    setTimeout(() => {
      navigate(MOVIES_PATH);
    }, 500);
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
      <div className='buttonContainer'>
        <Button
          variant='outlined'
          sx={{
            width: '12rem',
            fontSize: '20px',
            borderWidth: '2px',
            color: '#333333',
            borderColor: '#999999',
            borderRadius: '0.5',
            ':hover': {
              borderColor: '#999999',
              backgroundColor: '#f5f5dc',
            },
          }}
          onClick={handleButtonClick}
        >
          movies
        </Button>
      </div>
    </div>
  );
}
