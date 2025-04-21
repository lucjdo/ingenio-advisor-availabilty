'use client'

import { Avatar, Card, CardContent, Typography, Box } from '@mui/material'
import AdvisorContactButton from './advisor-contact-button'
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
        <AdvisorContactButton
          advisor={advisor}
          type='call'
          onCallNow={onCallNow}
          onChatLater={onChatLater}
        />
        <AdvisorContactButton
          advisor={advisor}
          type='chat'
          onCallNow={onCallNow}
          onChatLater={onChatLater}
        />
      </Box>
    </Card>
  )
}
