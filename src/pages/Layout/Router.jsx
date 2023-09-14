import { useRoutes } from "react-router-dom"
import Collections from "../Collections"
import Men from "../Men"
import Women from "../Women"
import About from "../About"
import Contact from "../Contact"
import Home from "../Home"

const Router = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "collections", element: <Collections /> },
    { path: "men", element: <Men /> },
    { path: "women", element: <Women /> },
    { path: "about", element: <About /> },
    { path: "contact", element: <Contact /> },
  ])

  return element
}

export default Router
