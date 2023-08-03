 import { CssBaseline } from '@mui/material';
import './App.css';
import MyCard from './Components/MyCard/MyCard';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Home from './Pages/Home/Home';
import Layout from './Components/Layout/Layout';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout></Layout>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      }
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
