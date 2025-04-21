'use client'

import { Avatar, Card, CardContent, Typography, Box } from '@mui/material'
import AdvisorContactButton from './advisor-contact-button'
import { AdvisorCardProps } from '../types/advisor'

export default function AdvisorCard({
  advisorId,
  name,
  profilePictureUrl,
  price
}: AdvisorCardProps) {
  return (
    <Card className='flex items-center p-4'>
      <Avatar
        sx={{ width: 90, height: 90 }}
        alt={name}
        src={profilePictureUrl}
      />

      <CardContent className='flex-1 ml-3'>
        <Typography variant='h6' color='primary'>
          {name}
        </Typography>
      </CardContent>

      <Box className='flex flex-col align-items-start gap-1'>
        <Typography sx={{ fontWeight: 600 }}>{price}</Typography>
        <AdvisorContactButton advisorId={advisorId} type='call' />
        <AdvisorContactButton advisorId={advisorId} type='chat' />
      </Box>
    </Card>
  )
}
