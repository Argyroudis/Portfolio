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
import {
  FaReact,
  FaGitAlt,
  FaLinkedin,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaBitbucket,
  FaJira,
} from 'react-icons/fa';
import { HOME_PATH } from '../HomeScreen';
import {
  SiRedux,
  SiJavascript,
  SiTypescript,
  SiSass,
  SiPreact,
  SiReactrouter,
  SiConfluence,
} from 'react-icons/si';
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
        <IconButton
          component='a'
          href='https://www.linkedin.com/in/stavros-argyroudis'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaLinkedin color='#0077B5' size={40} />
        </IconButton>
        <IconButton
          component='a'
          href='https://github.com/Argyroudis'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaGithub color='#B5B5B5' size={40} />
        </IconButton>
        <div className='bio'>{languageToken.bio}</div>
        <div className='ExperienceTitle'>{languageToken.ProfessionalExperience}</div>

        <Timeline position='alternate'>
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
                {languageToken.LastJob}
              </Typography>
              <Typography
                variant='body2'
                color='#ffc107'
                sx={{
                  fontSize: 'large',
                  fontWeight: 600,
                }}
              >
                {languageToken.LastJobDuration}
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
                {languageToken.LastJobDescription}
              </Typography>
            </TimelineContent>
          </TimelineItem>

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
                {languageToken.PreviousJob}
              </Typography>
              <Typography
                variant='body2'
                color='#ffc107'
                sx={{
                  fontSize: 'large',
                  fontWeight: 600,
                }}
              >
                {languageToken.PreviousDuration}
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
                color='#ffc107'
                component='div'
                sx={{
                  fontSize: 'larger',
                  fontWeight: 800,
                }}
              >
                • {languageToken.PreviousDescription.part1}
              </Typography>
              <Typography
                variant='h6'
                color='#ffc107'
                component='div'
                sx={{
                  fontSize: 'larger',
                  fontWeight: 800,
                }}
              >
                • {languageToken.PreviousDescription.part2}
              </Typography>
              <Typography
                variant='h6'
                color='#ffc107'
                component='div'
                sx={{
                  fontSize: 'larger',
                  fontWeight: 800,
                }}
              >
                • {languageToken.PreviousDescription.part3}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>

        <div className='SkillsTitle'>{languageToken.SkillsTitle}</div>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <FaReact color='#61DBFB' size={40} />
          <SiRedux color='#764ABC' size={40} />
          <SiJavascript color='#F7DF1E' size={40} />
          <SiTypescript color='#007ACC' size={40} />
          <FaGitAlt color='#F05033' size={40} />
          <FaHtml5 color='#E34F26' size={40} />
          <FaCss3Alt color='#1572B6' size={40} />
          <SiSass color='#CC6699' size={40} />
          <SiPreact color='#673AB8' size={40} />
          <SiReactrouter color='#CA4245' size={40} />
          <FaGithub color='#181717' size={40} />
          <FaBitbucket color='#0052CC' size={40} />
          <FaJira color='#0052CC' size={40} />
          <SiConfluence color='#172B4D' size={40} />
        </div>
      </div>

      <div className='footer'>
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
  );
}
