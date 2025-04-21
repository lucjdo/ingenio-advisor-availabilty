import { Container, Typography, Divider } from '@mui/material'
import AdvisorList from '@advisors/components/advisor-list'
import { getAdvisors } from '@advisors/services/advisors-service'

export default async function AdvisorsPage() {
  const advisors = await getAdvisors()

  return (
    <Container className='py-9' maxWidth='lg'>
      <Typography variant='h3' component='h1' gutterBottom>
        Our Advisors
      </Typography>
      <Typography sx={{ mb: 3 }} variant='subtitle1' color='text.secondary'>
        Browse our expert advisors and find the perfect match for your needs
      </Typography>
      <AdvisorList advisors={advisors} />
    </Container>
  )
}
