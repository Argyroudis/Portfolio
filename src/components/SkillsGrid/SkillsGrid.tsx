import {
  FaReact,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaBitbucket,
  FaJira,
} from 'react-icons/fa';
import {
  SiRedux,
  SiJavascript,
  SiTypescript,
  SiSass,
  SiPreact,
  SiReactrouter,
  SiConfluence,
} from 'react-icons/si';
import { SkillCard } from './SkillCard';
import './style.scss';

export function SkillsGrid() {
  return (
    <div className='skillCardsContainer'>
      <SkillCard text='React' icon={<FaReact color='#61DBFB' size={40} />} />
      <SkillCard text='Redux' icon={<SiRedux color='#764ABC' size={40} />} />
      <SkillCard text='JavaScript' icon={<SiJavascript color='#F7DF1E' size={40} />} />
      <SkillCard text='TypeScript' icon={<SiTypescript color='#007ACC' size={40} />} />
      <SkillCard text='Git' icon={<FaGitAlt color='#F05033' size={40} />} />
      <SkillCard text='HTML' icon={<FaHtml5 color='#E34F26' size={40} />} />
      <SkillCard text='CSS' icon={<FaCss3Alt color='#1572B6' size={40} />} />
      <SkillCard text='Sass' icon={<SiSass color='#CC6699' size={40} />} />
      <SkillCard text='Preact' icon={<SiPreact color='#673AB8' size={40} />} />
      <SkillCard text='React Router' icon={<SiReactrouter color='#CA4245' size={40} />} />
      <SkillCard text='GitHub' icon={<FaGithub color='#181717' size={40} />} />
      <SkillCard text='Bitbucket' icon={<FaBitbucket color='#0052CC' size={40} />} />
      <SkillCard text='Jira' icon={<FaJira color='#0052CC' size={40} />} />
      <SkillCard text='Confluence' icon={<SiConfluence color='#172B4D' size={40} />} />
    </div>
  );
}
