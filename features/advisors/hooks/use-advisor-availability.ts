import { useQuery } from '@tanstack/react-query'
import { getAdvisorAvailability } from '@advisors/services/advisors-service'

export function useAdvisorAvailability(advisorId: number) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['advisor-availability', advisorId],
    queryFn: () => getAdvisorAvailability(advisorId),
    refetchInterval: 30000
  })

  return {
    callAvailability: data?.['call-availability'],
    chatAvailability: data?.['chat-availability'],
    isLoading,
    isError
  }
}
