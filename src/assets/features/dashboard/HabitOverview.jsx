import React from 'react'

const HabitOverview = () => {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-[#E8F0E9] p-4 mx-2 sm:mx-4 lg:mx-6 my-1 sm:my-2 lg:my-3 sm:p-6 lg:p-7">
        <div className='flex justify-between'>
            <div className='left-section'>
                <h2 className='font-bold text-2xl'>Today's Habits</h2>
                <p>Build consistency, one day at a time</p>
            </div>

            <div className="right-section">
                <button className='font-semibold rounded-[30px] bg-green-300 py-4 px-6'>View All +</button>
            </div>
        </div>
    </section>
  )
}

export default HabitOverview