import React from 'react'
import WelcomeSection from '../assets/features/dashboard/WelcomeSection'
import OverViewCards from '../assets/features/dashboard/OverViewCards'
import HabitOverview from '../assets/features/dashboard/HabitOverview'

const Dashboard = () => {
  return (
    <div>
        <WelcomeSection/>
        <OverViewCards/>
        <HabitOverview/>
    </div>
  )
}

export default Dashboard