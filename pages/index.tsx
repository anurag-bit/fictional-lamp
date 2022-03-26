import BigText from 'components/BigText'
import Container from 'components/Container'

export default function Home() {
  return (
    <Container>
      <div className='flex flex-col items-center justify-center py-2'>
        <BigText slides={['Anurag', 'Kumar', 'Singh']} />
      </div>
    </Container>
  )
}
