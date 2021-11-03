import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <Link href={'/404'}>go 404</Link>
    </div>
  )
}

export default Home
