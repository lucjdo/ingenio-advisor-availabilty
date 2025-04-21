export interface AdvisorAvailability {
  id: number
  availableSlots: string[] // ISO date strings
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
  isLoading: boolean
  onSelectAdvisor?: (advisor: Advisor) => void
}

export interface AdvisorCardProps {
  advisor: Advisor
  onCallNow?: (advisor: Advisor) => void
  onChatLater?: (advisor: Advisor) => void
}
