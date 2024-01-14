import React from 'react'
import { TopPage, UpcomingPage } from '../../Pages'

const ScrollableSection = () => {
  return (
    <div role='scroll'>
    <TopPage/>
    <UpcomingPage/>
    </div>
  )
}

export default ScrollableSection
