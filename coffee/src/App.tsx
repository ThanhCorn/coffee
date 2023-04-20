import React, { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { RootState } from "./app/store";
import "./App.css";
import { CategoryCard } from "./components/CategoryCard";
import { Input, Button } from "antd";
import { addCategory } from "./features/categorySlice";
import { MenuCard } from "./components/MenuCard";


function App() {
  const [categoryNameInput, setCategoryNameInput] = useState<string>("");
  const categories = useSelector((state: RootState) => state.categories.value);
  const menus = useSelector((state: RootState) => state.menus.value);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Categories</h5>
            <div className="reservation-cards-container">
              {categories.map((name,index) => {
                return <CategoryCard name={name} index={index}/>
              })}
            </div>
          </div>
          <div className="reservation-input-container">
            <Input value={categoryNameInput} onChange={e=> setCategoryNameInput(e.target.value)}/>
            <Button onClick={() => {
              if(!categoryNameInput)return;
              dispatch(addCategory(categoryNameInput))
              setCategoryNameInput("")
            }}>Add</Button>
          </div>
        </div>
        <div className="customer-food-container">
            {menus.map((menu) => {
              return <MenuCard name={menu.name} id={menu.id} food={menu.food}/>
            })}
        </div>
      </div>
    </div>
  );
}

export default App;