const BASE_URL = 'https://mp30dcc6efca114e1b21.free.beeceptor.com'

export const getAdvisors = async () => {
  const res = await fetch(`${BASE_URL}/advisor-listings`)
  return await res.json()
}

export const getAdvisorAvailability = async (id: number) => {
  const res = await fetch(`${BASE_URL}/advisor-availability?id=${id}`)
  return await res.json()
}
