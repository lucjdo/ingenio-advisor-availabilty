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
