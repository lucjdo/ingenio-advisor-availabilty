'use client'

import { Avatar, Typography, Box } from '@mui/material'
import AdvisorContactButton from './advisor-contact-button'
import { AdvisorCardProps } from '../types/advisor'

export default function AdvisorCard({
  advisorId,
  name,
  profilePictureUrl,
  price
}: AdvisorCardProps) {
  return (
    <Box className='flex p-4'>
      <Avatar
        sx={{ width: 130, height: 130 }}
        alt={name}
        src={profilePictureUrl}
      />

      <Box className='flex-1 ml-3'>
        <Typography variant='h6' color='#009688'>
          {name}
        </Typography>
      </Box>

      <Box className='flex flex-col align-items-start gap-1 mt-4 min-w-36'>
        <Typography sx={{ fontWeight: 600 }}>{price}</Typography>
        <AdvisorContactButton advisorId={advisorId} type='call' />
        <AdvisorContactButton advisorId={advisorId} type='chat' />
      </Box>
    </Box>
  )
}
