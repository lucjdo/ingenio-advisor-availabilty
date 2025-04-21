'use client'

import { Avatar, Card, CardContent, Typography, Box } from '@mui/material'
import AdvisorAvailabilityButton from './advisor-availability-button'
import { AdvisorCardProps } from '../types/advisor'

export default function AdvisorCard({
  advisor,
  onCallNow,
  onChatLater
}: AdvisorCardProps) {
  return (
    <Card className='flex items-center p-4'>
      <Avatar
        sx={{ width: 90, height: 90 }}
        alt={advisor.name}
        src={advisor.profilePictureUrl}
      />

      <CardContent className='flex-1 ml-3'>
        <Typography variant='h6' color='primary'>
          {advisor.name}
        </Typography>
      </CardContent>

      <Box className='flex flex-col align-items-start gap-1'>
        <Typography className='font-bold'>{advisor.price}</Typography>
        <AdvisorAvailabilityButton
          advisor={advisor}
          type='call'
          onCallNow={onCallNow}
          onChatLater={onChatLater}
        />
        <AdvisorAvailabilityButton
          advisor={advisor}
          type='chat'
          onCallNow={onCallNow}
          onChatLater={onChatLater}
        />
      </Box>
    </Card>
  )
}
