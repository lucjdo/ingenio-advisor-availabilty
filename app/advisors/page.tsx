import { Container, Typography } from '@mui/material'
import AdvisorList from '@advisors/components/advisor-list'
import { getAdvisors } from '@advisors/services/advisors-service'

export default async function AdvisorsPage() {
  const advisors = await getAdvisors()

  return (
    <Container className='py-9' maxWidth='lg'>
      <h1>Our Advisors</h1>
      <Typography sx={{ mb: 3 }} variant='subtitle1' color='text.secondary'>
        Browse our expert advisors and find the perfect match for your needs
      </Typography>
      <AdvisorList advisors={advisors} />
    </Container>
  )
}
