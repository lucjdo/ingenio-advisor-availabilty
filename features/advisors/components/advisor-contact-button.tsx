'use client'

import { Button } from '@mui/material'
import ChatIcon from '@mui/icons-material/Chat'
import PhoneIcon from '@mui/icons-material/Phone'
import { useAdvisorAvailability } from '../hooks/useAdvisorAvailability'
import { Advisor } from '../types/advisor'

export type AvailabilityType = 'call' | 'chat'

type ButtonConfigType = {
  [key in AvailabilityType]: {
    text: string
    icon: React.ReactNode
    onClick: () => void
  }
}

interface AdvisorContactButtonProps {
  advisor: Advisor
  type: AvailabilityType
  onCallNow?: (advisor: Advisor) => void
  onChatLater?: (advisor: Advisor) => void
}

export default function AdvisorContactButton({
  advisor,
  type,
  onCallNow,
  onChatLater
}: AdvisorContactButtonProps) {
  const isCallType = type === 'call'
  const { callAvailability, chatAvailability } = useAdvisorAvailability(
    advisor.id
  )
  const isAvailable = isCallType
    ? callAvailability === 1
    : chatAvailability === 1

  const buttonConfig: ButtonConfigType = {
    call: {
      text: 'CALL NOW',
      icon: <PhoneIcon />,
      onClick: () => onCallNow?.(advisor)
    },
    chat: {
      text: 'CHAT LATER',
      icon: <ChatIcon />,
      onClick: () => onChatLater?.(advisor)
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
