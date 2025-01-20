import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { HOME_PATH } from '../HomeScreen';
import { languageToken } from '@/assets/messages';
import './style.scss';

export const FORMAL_HOME_PATH = '/FormalHome/';

export function FormalHome() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    setTimeout(() => {
      navigate(HOME_PATH);
    }, 500);
  };

  return (
    <div className='root'>
      <div className='Header'>
        <div className='Name'>{languageToken.fullName}</div>
        <div className='jobTitle'>{languageToken.jobTitle}</div>
        <div className='bio'>{languageToken.bio}</div>
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
      </div>
    </div>
  );
}
