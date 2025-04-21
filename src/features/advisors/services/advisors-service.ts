import { AdvisorsResponse } from '@advisors/types/advisor'

const BASE_URL = 'https://mp30dcc6efca114e1b21.free.beeceptor.com'

const MOCK_ADVISORS = {
  data: [
    {
      id: 1,
      name: 'Advisor Laura',
      profilePictureUrl:
        'https://si.keen.com/memberphotos/-5253289-1156765229Primary.jpg',
      price: '$4.99/min',
      'call-availability': 1,
      'chat-availability': 0
    },
    {
      id: 2,
      name: 'Miss Elisabeth',
      profilePictureUrl:
        'https://si.keen.com/memberphotos/-54149795-980884913Primary.jpg',
      price: '$7.99/min',
      'call-availability': 1,
      'chat-availability': 0
    },
    {
      id: 3,
      name: 'Advisor Jada',
      profilePictureUrl:
        'https://si.keen.com/memberphotos/-24651289-1547364832Primary.jpg',
      price: '$2.49/min',
      'call-availability': 1,
      'chat-availability': 0
    },
    {
      id: 4,
      name: 'RexFrederick',
      profilePictureUrl:
        'https://si.keen.com/memberphotos/-24651289-1547364832Primary.jpg',
      price: '$4.25/min',
      'call-availability': 1,
      'chat-availability': 1
    }
  ]
}

export const getAdvisors = async () => {
  try {
    const res = await fetch(`${BASE_URL}/advisor-listings`)
    if (!res.ok) {
      if (res.status === 429) {
        console.warn('API rate limit reached, using mock data')
        return MOCK_ADVISORS.data
      }
      throw new Error(`HTTP error! status: ${res.status}`)
    }
    const data = await res.json()
    return (data as AdvisorsResponse).data
  } catch (error) {
    console.error('Error fetching advisors:', error)
    console.warn('Falling back to mock data')
    return MOCK_ADVISORS.data
  }
}

const MOCK_AVAILABILITY = {
  'call-availability': Math.random() > 0.5 ? 1 : 0,
  'chat-availability': Math.random() > 0.5 ? 1 : 0
}

export const getAdvisorAvailability = async (id: number) => {
  try {
    const res = await fetch(`${BASE_URL}/advisor-availability?id=${id}`)
    if (!res.ok) {
      if (res.status === 429) {
        return MOCK_AVAILABILITY
      }
      throw new Error(`HTTP error! status: ${res.status}`)
    }
    // Unmock when API is available
    // const data = await res.json()
    return MOCK_AVAILABILITY
  } catch (error) {
    console.error('Error fetching advisor availability:', error)
    throw error
  }
}
