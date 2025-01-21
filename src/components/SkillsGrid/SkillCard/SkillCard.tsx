import './style.scss';

interface SkillCardProps {
  text: string;
  icon: React.ReactNode;
}

export function SkillCard({ text, icon }: SkillCardProps) {
  return (
    <div className='skillCard'>
      <div className='iconWrapper'>{icon}</div>
      <div className='skillName'>{text}</div>
    </div>
  );
}
