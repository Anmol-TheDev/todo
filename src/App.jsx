import {ThemeProvider} from "@/components/ui/themeprovider"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home/home'
import AuthTabs from "./components/Auth/auth"
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/auth",
    element: <AuthTabs/>
  }
])


export default function App() {

  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
     <RouterProvider router={router}/>
    </ThemeProvider>
  )
}

