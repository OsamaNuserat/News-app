import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./componenets/Home"
import NotFound from "./componenets/NotFound"

const App = () => {
  const router = createBrowserRouter([{
    path: '/',
    element: <Home/>,
    errorElement : <NotFound/>
  }])
  return (
    <RouterProvider router = {router} />
  )
}

export default App