'use client'

import { Box, Divider, Typography } from '@mui/material'
import AdvisorCard from '@advisors/components/advisor-card'
import { AdvisorListProps } from '@advisors/types/advisor'

export default function AdvisorList({ advisors }: AdvisorListProps) {
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
      {advisors.map(({ id, name, profilePictureUrl, price }, index) => (
        <Box key={`${name}-${id}`}>
          <AdvisorCard
            advisorId={id}
            name={name}
            price={price}
            profilePictureUrl={profilePictureUrl}
          />
          {index !== advisors.length - 1 && <Divider />}
        </Box>
      ))}
    </Box>
  )
}
