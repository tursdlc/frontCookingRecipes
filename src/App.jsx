import './App.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Layout from './layout';
import Home from './pages/home'
import RecipePage from './pages/recipePage'
import AddRecipe from './pages/addRecipe'


function App() {
  const router = createBrowserRouter([
    {
      element:<Layout></Layout>,
      children:[
        {
          path:'/',
          element: <Home></Home>
        },
        {
          path:'/addrecipe',
          element: <AddRecipe></AddRecipe>
        },
        {
          path:'/recipes',
          element: <RecipePage></RecipePage>
        }
      ]
    }
  ])


  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
