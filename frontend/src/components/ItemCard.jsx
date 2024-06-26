import React, { useContext } from 'react'
import Button from './Button'
import { OrderContext } from '../sections/MainSection'

const ItemCard = (props) => {
  const {orderItem} = useContext(OrderContext)
  return (
    <div className='w-full m-auto max-w-96 min-w-72 p-2 shadow-md rounded-xl grid grid-cols-2 bg-white gap-2'>
      <div className='relative w-full rounded-lg overflow-hidden aspect-square'>
        {props.isLoading ?
          <div role="status" class="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center">
              <div class="flex items-center justify-center w-full aspect-square bg-gray-300 rounded sm:w-96 ">
                  <svg class="w-10 h-10 text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                      <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                  </svg>
              </div>
          </div>
          :
          <img 
              src={props.item.image} 
              alt={`${props.item.name} image`} 
              className='absolute top-0 h-full w-full object-cover'
          />
        }
      </div>
      <div className='flex flex-col justify-between'>
        {props.isLoading ?
          <div role="status" class="max-w-sm rounded animate-pulse">
            <div class="h-8 bg-gray-200 rounded-lg w-32 mt-2"></div>
          </div>
          :
          <p className='text-3xl'>{props.item.name}</p>
        }
        {props.isLoading ?
          <div role="status" class="max-w-sm rounded animate-pulse">
            <div class="h-4 bg-gray-200 rounded-full w-12 mb-2"></div>
            <div class="w-full h-8 bg-gray-200 rounded-sm"></div>
          </div>
          :
          <div>
              <p className='text-lg'>{props.item.price} dh</p>
              <Button onClick={() => orderItem(props.item)} text="order" fill={true} className="w-full" />
          </div>
        }
      </div>

    </div>
  )
}

export default ItemCard
