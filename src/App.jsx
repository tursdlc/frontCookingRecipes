import './App.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Layout from './layout';
import Home from './pages/home'
import SingleRecipePage from './pages/singleRecipePage'
import RecipesPage from './pages/recipesPage'
import AddRecipe from './pages/addRecipe'
import EditRecipe from './pages/editRecipe'

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
          element: <RecipesPage></RecipesPage>
        },
        {
          path:'/recipes/:id',
          element: <SingleRecipePage />
        },
        {
          path:'/edit-recipe',
          element: <EditRecipe></EditRecipe>
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
