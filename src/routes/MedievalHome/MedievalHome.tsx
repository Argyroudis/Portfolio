import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, CircularProgress } from '@mui/material';
import warrior_card from '@/assets/images/warrior_card.png';
import weapons_card from '@/assets/images/weapons_card.png';
import experience_card from '@/assets/images/experience_card.png';
import { HOME_PATH } from '../HomeScreen';
import { useAppContext } from '@/AppContext';
import './style.scss';

export const MEDIEVAL_HOME_PATH = '/MedievalHome/';

export function MedievalHome() {
  const navigate = useNavigate();
  const [shallShowLoader, setShallShowLoader] = useState(false);
  const { currentStep, setCurrentStep, STATE_ORDER, STATES } = useAppContext();

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
    setShallShowLoader(true);
    setTimeout(() => {
      navigate(HOME_PATH);
    }, 500);
  };

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
      <div className='bottomContainer'>
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
            Home Screen
          </Button>
        </div>
        {shallShowLoader && (
          <div className='progressContainer'>
            <CircularProgress size='2.5rem' sx={{ color: 'black' }} />
          </div>
        )}
      </div>
    </div>
  );
}
