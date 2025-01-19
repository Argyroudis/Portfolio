import { Card, CardContent, Typography, Button } from '@mui/material';

export function HomeButton({
  onPress,
  text,
  target,
}: {
  onPress: (choice: string) => void;
  text: string;
  target: string;
}) {
  const handleButtonClick = (choice: string) => {
    onPress(choice);
  };

  return (
    <Card
      sx={{
        width: '24em',
        borderRadius: '1em',
        textAlign: 'center',
        backgroundColor: '#000000',
        color: '#8B4513',
      }}
    >
      <CardContent>
        <Typography
          variant='h6'
          sx={{
            marginBottom: '1rem',
            fontWeight: 'bold',
          }}
        >
          {text}
        </Typography>
        <Button
          variant='contained'
          sx={{
            backgroundColor: '#8B4513',
            color: '#000000',
            fontSize: '18px',
            textTransform: 'none',
            ':hover': {
              backgroundColor: '#A0522D',
            },
          }}
          onClick={() => handleButtonClick(target)}
        >
          Confirm
        </Button>
      </CardContent>
    </Card>
  );
}
