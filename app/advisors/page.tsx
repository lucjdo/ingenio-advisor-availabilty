import { Container, Typography, Divider } from '@mui/material'
import AdvisorList from '@/features/advisors/components/advisor-list'
import { getAdvisors } from '@/features/advisors/services/advisors-service'

export default async function AdvisorsPage() {
  const advisors = await getAdvisors()

  return (
    <Container maxWidth='lg' sx={{ py: 4 }}>
      <Typography variant='h3' component='h1' gutterBottom>
        Our Advisors
      </Typography>
      <Typography variant='subtitle1' color='text.secondary' sx={{ mb: 2 }}>
        Browse our expert advisors and find the perfect match for your needs
      </Typography>
      <Divider sx={{ my: 3 }} />
      <AdvisorList advisors={advisors} isLoading={false} />
    </Container>
  )
}
