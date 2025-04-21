export interface AdvisorAvailability {
  id: number
  availableSlots: string[]
}

export interface Advisor {
  id: number
  name: string
  profilePictureUrl: string
  price: string
  'call-availability': number
  'chat-availability': number
}

export interface AdvisorsResponse {
  data: Advisor[]
}

export interface AdvisorListProps {
  advisors: Advisor[] | null
}

export interface AdvisorCardProps {
  name: string
  price: string
  advisorId: number
  profilePictureUrl: string
}

export type AvailabilityType = 'call' | 'chat'

export type ButtonConfigType = {
  [key in AvailabilityType]: {
    text: string
    icon: React.ReactNode
    onClick: () => void
  }
}

export interface AdvisorContactButtonProps {
  advisorId: number
  type: 'call' | 'chat'
}
