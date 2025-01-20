import { useNavigate } from 'react-router-dom';
import { Button, IconButton } from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
  // TimelineDot,
} from '@mui/lab';
import { Typography } from '@mui/material';
import { FaReact, FaGitAlt } from 'react-icons/fa';
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
        {/* <div className='Name'>{languageToken.fullName}</div>
        <div className='jobTitle'>{languageToken.jobTitle}</div>
        <div className='bio'>{languageToken.bio}</div> */}
        <Timeline position='alternate'>
          {/* Timeline Item 1 */}
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography
                variant='body2'
                color='#e0e0e0'
                sx={{
                  fontSize: 'x-large',
                  fontWeight: 800,
                }}
              >
                {languageToken.fullName}
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <IconButton>
                <FaReact color='#61DAFB' size={40} />
              </IconButton>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography
                variant='h6'
                color='#ffc107'
                component='span'
                sx={{
                  fontSize: 'larger',
                  fontWeight: 800,
                }}
              >
                {languageToken.jobTitle}
              </Typography>
            </TimelineContent>
          </TimelineItem>

          {/* Timeline Item 2 */}
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant='body2' color='#e0e0e0'>
                {languageToken.what}
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <IconButton>
                <FaGitAlt color='#F14E32' size={40} />
              </IconButton>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography
                variant='h6'
                component='span'
                color='#ffc107'
                sx={{
                  fontSize: 'medium',
                  fontWeight: 600,
                }}
              >
                {languageToken.bio}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
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
