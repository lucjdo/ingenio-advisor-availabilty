'use client'

import { Box, Typography, CircularProgress } from '@mui/material'
import AdvisorCard from './advisor-card'
import { AdvisorListProps } from '../types/advisor'

export default function AdvisorList({
  advisors,
  isLoading,
  onSelectAdvisor
}: AdvisorListProps) {
  if (isLoading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '300px'
        }}
      >
        <CircularProgress />
      </Box>
    )
  }

  if (!advisors || advisors.length === 0) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '300px'
        }}
      >
        <Typography>No advisors found</Typography>
      </Box>
    )
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      {advisors.map(advisor => (
        <AdvisorCard
          key={`${advisor.name}-${advisor.id}`}
          advisor={advisor}
          onCallNow={onSelectAdvisor}
          onChatLater={onSelectAdvisor}
        />
      ))}
    </Box>
  )
}
