import Content from '@/components/Content'
import Menu from '@/components/Menu'
import React from 'react'

function Home() {
  return (
    <div className='flex relative jost bg-white'>
      <Menu/>
      <Content/>
    </div>
  )
}

export default Home