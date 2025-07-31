import { useEffect, useState } from 'react';
import { MyMeals } from './MyMeals';
import { getAllMeals, addMeal, editMeal, deleteMeal } from './FetchMeals';
import './App.css'


function App() {

  const [myMeal, setMeal] = useState([]);
  const [title, setTitle] = useState("");
  const [editing, setEditing] = useState(false);
  const [mealId, setMealId] = useState("");

  useEffect(() => {
  getAllMeals(setMeal)
  }, [])

  const updatingInput = (_id, title) => {
    setEditing(true)
    setTitle(title)
    setMealId(_id)
  }

  return (
    <div>
      <h1>Meal Plan</h1>

      <input 
        type='text'
        placeholder='Add a Meal'
        value = {title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button disabled={!title}
        onClick={editing ? () => editMeal(mealId, title, setTitle, setMeal, setEditing) 
          : () => addMeal(title, setTitle, setMeal) }>
            {editing ? "Edit" : "Add"}
      </button>

      {myMeal.map((meal) => <MyMeals key={meal._id} text={meal.title} 
      updatingInput={() => updatingInput(meal._id, meal.title)}
      deleteMeal={() => deleteMeal(meal._id, setMeal)}
      />
      )}

    </div>
  )
}

export default App
