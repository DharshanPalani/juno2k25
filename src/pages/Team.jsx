import React from 'react'

import TeamList from '../components/TeamList'

function Team() {
  return (
    <div className='p-8 text-white mt-8'>
      {/* <h1 className="text-5xl text-center font-bold text-gold-500 mb-8">Meet the Team</h1>
      <div className="bg-gray-700 w-full mb-[100px] h-[400px] flex items-center justify-center text-gray-400">
        Correspondent, Principal & Vice Principal image
      </div> */}
      <TeamList />
    </div>
  )
}

export default Team