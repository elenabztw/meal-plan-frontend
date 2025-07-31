import axios from 'axios';

const getAllMeals = (setMeal) => {
  axios.get("https://meal-plan-backend-60rq.onrender.com")
  .then(({ data }) => {
    console.log(data)
    setMeal(data);
  })
}

const addMeal = (title, setTitle, setMeal) => {
  axios.post(`https://meal-plan-backend-60rq.onrender.com/saveMeal`, { title })
  .then((data) => {
    console.log(data)
    setTitle("")            // очищает поле ввода
    getAllMeals(setMeal)     // обновляет список всех блюд с сервера
  })
}

const editMeal = (mealId, title, setTitle, setMeal, setEditing) => {
  axios.put(`https://meal-plan-backend-60rq.onrender.com/editMeal`, { _id: mealId, title })
  .then((data) => {
    console.log(data)
    setTitle("")
    getAllMeals(setMeal)
  })
}

const deleteMeal = (_id, setMeal) => {
    axios.post(`https://meal-plan-backend-60rq.onrender.com/deleteMeal`, { _id })
    .then((data) => {
      console.log(data)
      getAllMeals(setMeal)
  })
}

export { getAllMeals, addMeal, editMeal, deleteMeal };
