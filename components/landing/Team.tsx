import { team } from '@/data';
import Image from 'next/image';
import { FC } from 'react'

export const Team: FC = () => {
  return (
    <div className='grid grid-cols-3 md:grid-cols-3 gap-4 mb-20 my-14 w-3/4 max-w-screen-lg mx-auto'>
        {
            team.map( member => (
                <div key={member.name} className="text-white text-center mb-5">
                    <div className='flex justify-center'>
                        <Image src={member.img} alt={member.name} className="shadow-md" />
                    </div>
                    <h1 className='text-2xl text-yellow mt-4'>{member.name}</h1>
                    <p>{member.title}</p>
                </div>
            ))
        }
    </div>
  )
}
