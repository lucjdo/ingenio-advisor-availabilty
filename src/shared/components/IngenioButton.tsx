import { Button, ButtonProps } from '@mui/material'

export default function IngenioButton({ ...props }: ButtonProps) {
  return (
    <Button
      variant='contained'
      sx={{
        bgcolor: '#009688',
        '&:hover': { bgcolor: '#00a693' },
        textTransform: 'none',
        mb: 0.5,
        ...(props.disabled
          ? {
              opacity: 0.6,
              cursor: 'not-allowed'
            }
          : {})
      }}
      {...props}
    >
      {props.children}
    </Button>
  )
}
