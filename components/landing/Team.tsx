import { team } from '@/data';
import Image from 'next/image';
import { FC } from 'react'

export const Team: FC = () => {
  return (
    <div className='flex gap-14 mb-20 mx-10 flex-wrap justify-center my-20'>
        {
            team.map( member => (
                <div key={member.name} className="text-white text-center w-48 md:w-1/4">
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
