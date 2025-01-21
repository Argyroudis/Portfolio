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

export function SkillsGrid() {
  return (
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
  );
}
