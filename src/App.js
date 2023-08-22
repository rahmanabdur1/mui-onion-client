 import { CssBaseline } from '@mui/material';
import './App.css';
import MyCard from './Components/MyCard/MyCard';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Home from './Pages/Home/Home';
import Layout from './Components/Layout/Layout';
import MealDetails from './Pages/MealDetails/MealDetails';
// import Register from './Pages/Register/Register';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout></Layout>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path: '/meal-details/:mealId',
        element: <MealDetails></MealDetails>
      },
      // {
      //   path:'/register',
      //   element:<Register></Register>
      // }
    ]
  }
])
function App() {
  return (
    <div className="">
     <CssBaseline/>
     <RouterProvider router={router}/>
     <MyCard/>
    </div>
  );
}

export default App;
