import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom"
import { Layout } from "./Layout"
import { Home } from "../pages/Home"
import "./App.css"
import { About } from "../pages/About"
import { Vans, loader as vansLoader } from "../pages/Vans/Vans"

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="vans" element={<Vans />} loader={vansLoader} />
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App
