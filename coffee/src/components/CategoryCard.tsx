import React from 'react'
import { useDispatch } from 'react-redux'
import { removeCategory } from '../features/categorySlice';
import { addMenu } from '../features/menuSlice';
import { v4 as uuid } from 'uuid'

interface CategoryCardTypes {
    name: string;
    index: number;
}

export const CategoryCard = ({name,index}:CategoryCardTypes ) => {
    const dispatch = useDispatch()
  return (
      <div className="reservation-card-container" onClick={()=>{
        dispatch(removeCategory(index))
        dispatch(addMenu({
            id: uuid(),
            name,
            food: []
        }))
      }}>{name}</div>
  )
}
