import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
} from '@mui/lab';
import { Typography, IconButton } from '@mui/material';
import { FaReact, FaGitAlt } from 'react-icons/fa';
import { languageToken } from '@/assets/messages';

export function TimelineOfJobs() {
  return (
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
            {languageToken.Jobs.LastJob}
          </Typography>
          <Typography
            variant='body2'
            color='#ffc107'
            sx={{
              fontSize: 'large',
              fontWeight: 600,
            }}
          >
            {languageToken.Jobs.LastJobDuration}
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
            {languageToken.Jobs.LastJobDescription}
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
            {languageToken.Jobs.PreviousJob}
          </Typography>
          <Typography
            variant='body2'
            color='#ffc107'
            sx={{
              fontSize: 'large',
              fontWeight: 600,
            }}
          >
            {languageToken.Jobs.PreviousDuration}
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
            • {languageToken.Jobs.PreviousDescription.part1}
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
            • {languageToken.Jobs.PreviousDescription.part2}
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
            • {languageToken.Jobs.PreviousDescription.part3}
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
