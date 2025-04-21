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
    <Card sx={{ display: 'flex', alignItems: 'center', p: 2 }}>
      <Avatar
        sx={{ width: 90, height: 90 }}
        alt={advisor.name}
        src={advisor.profilePictureUrl}
      />

      <CardContent sx={{ flex: 1, ml: 2 }}>
        <Typography variant='h6' color='primary'>
          {advisor.name}
        </Typography>
      </CardContent>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: 1
        }}
      >
        <Typography sx={{ fontWeight: '600' }}>{advisor.price}</Typography>
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
