import { useNavigate } from 'react-router-dom';
import { Button, IconButton } from '@mui/material';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { HOME_PATH } from '../HomeScreen';
import { TimelineOfJobs } from '@/components/TimelineOfJobs';
import { SkillsGrid } from '@/components/SkillsGrid';
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
        <div className='Name'>{languageToken.personalInfo.fullName}</div>
        <div className='jobTitle'>{languageToken.personalInfo.jobTitle}</div>
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
        <div className='bio'>{languageToken.personalInfo.bio}</div>
        <div className='ExperienceTitle'>{languageToken.Jobs.ProfessionalExperience}</div>
        <TimelineOfJobs />

        <div className='SkillsTitle'>{languageToken.skills.SkillsTitle}</div>
        <div className='SkillsGrid'>
          <SkillsGrid />
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
