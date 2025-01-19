import { useNavigate } from 'react-router-dom';
import { MEDIEVAL_HOME_PATH } from '../MedievalHome';
import { FORMAL_HOME_PATH } from '../FormalHome';
import background from '@/assets/homeBackground.webp';
import { HomeButton } from './button';
import './style.scss';

export const HOME_PATH = '/home/';

export function Home() {
  const navigate = useNavigate();

  const handleButtonClick = (choice: string) => {
    if (choice === 'medieval') {
      navigate(MEDIEVAL_HOME_PATH);
    } else if (choice === 'formal') {
      navigate(FORMAL_HOME_PATH);
    } else {
      console.log('Error on choosing the portfolio to show');
    }
  };

  const backgroundImage = `url(${background})`;

  return (
    <div className='root'>
      <div
        className='backgroundContainer'
        style={{
          backgroundImage,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      />
      <div className='leftCard'>
        <HomeButton
          text={'Choose a Medieval Style Portfolio'}
          onPress={(choice) => handleButtonClick(choice)}
          target={'medieval'}
        />
      </div>
      <div className='rightCard'>
        <HomeButton
          text={'Choose a Formal Style Portfolio'}
          onPress={(choice) => handleButtonClick(choice)}
          target={'formal'}
        />
      </div>
    </div>
  );
}
