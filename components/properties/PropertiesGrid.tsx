import { IProperty } from '@/interfaces'
import { FC } from 'react'
import { PropertyCard } from './PropertyCard'

interface Props {
    properties: IProperty[]
}

export const PropertiesGrid: FC<Props> = ({ properties }) => {

  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mb-10'>
        {
            properties.map( prop => (
                <PropertyCard key={prop._id} property={prop} />
            ))
        }
    </div>
  )
}
