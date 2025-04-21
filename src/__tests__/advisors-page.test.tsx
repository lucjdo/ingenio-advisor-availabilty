import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AdvisorsPage from '@/src/app/advisors/page'

test('Advisors Page', async () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false
      }
    }
  })

  const advisorsPageContent = await AdvisorsPage()

  render(
    <QueryClientProvider client={queryClient}>
      {advisorsPageContent}
    </QueryClientProvider>
  )

  expect(
    screen.getByRole('heading', { level: 1, name: 'Our Advisors' })
  ).toBeDefined()
})
