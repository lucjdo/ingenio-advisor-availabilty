'use client'

import { useCallback } from 'react'
import { Button } from '@mui/material'
import ChatIcon from '@mui/icons-material/Chat'
import PhoneIcon from '@mui/icons-material/Phone'
import { useAdvisorAvailability } from '@/features/advisors/hooks/use-advisor-availability'
import {
  AdvisorContactButtonProps,
  ButtonConfigType
} from '@advisors/types/advisor'

export default function AdvisorContactButton({
  advisorId,
  type
}: AdvisorContactButtonProps) {
  const { callAvailability, chatAvailability } =
    useAdvisorAvailability(advisorId)

  const isCallType = type === 'call'
  const isAvailable = isCallType
    ? callAvailability === 1
    : chatAvailability === 1

  const handleOnCallNow = useCallback(() => {
    alert(`Calling Advisor ${advisorId}`)
  }, [advisorId])

  const handleOnChatNow = useCallback(() => {
    alert(`Chatting with Advisor ${advisorId}`)
  }, [advisorId])

  const buttonConfig: ButtonConfigType = {
    call: {
      text: isAvailable ? 'CALL NOW' : 'CALL LATER',
      icon: <PhoneIcon />,
      onClick: handleOnCallNow
    },
    chat: {
      text: isAvailable ? 'CHAT NOW' : 'CHAT LATER',
      icon: <ChatIcon />,
      onClick: handleOnChatNow
    }
  }

  const config = buttonConfig[type]

  return (
    <Button
      variant='contained'
      startIcon={config.icon}
      onClick={config.onClick}
      fullWidth
      disabled={!isAvailable}
      sx={{
        bgcolor: '#00bfa5',
        '&:hover': { bgcolor: '#00a693' },
        textTransform: 'none',
        mb: 0.5,
        ...(!isAvailable
          ? {
              opacity: 0.6,
              cursor: 'not-allowed'
            }
          : {})
      }}
    >
      {config.text}
    </Button>
  )
}
