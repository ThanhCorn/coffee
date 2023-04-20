import React, { useState } from 'react'
import { Button, Input } from 'antd'
import { useDispatch } from 'react-redux'
import { addMenuItem } from '../features/menuSlice'

interface Menu {
    id: string
    name: string
    food: string[]
}

export const MenuCard = ({ id, name, food }: Menu) => {
    const [foodInput, setFoodInput] = useState('')
    const dispatch = useDispatch()
    return (
        <div className="customer-food-card-container">
            <p>{name}</p>
            <div className="customer-foods-container">
                <div className="customer-food">
                    {food.map(name => {
                        return <p>{name}</p>

                    })}
                </div>
                <div className="customer-food-input-container">
                    <Input value={foodInput} onChange={(e) => setFoodInput(e.target.value)} />
                    <Button onClick={() => {
                        if (!foodInput) return;
                        dispatch(addMenuItem({ id, food: foodInput }))
                        setFoodInput("")
                    }}>Add</Button>
                </div>
            </div>
        </div>
    )
}
