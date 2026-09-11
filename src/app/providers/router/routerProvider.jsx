import { createBrowserRouter } from "react-router-dom"
import Auth from "../../../features/auth/Auth"
import Login from "../../../features/auth/pages/Login"
import Register from "../../../features/auth/pages/Register"

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Auth/>,
        children: [
            {
                element: <Login/>,
                index: true
            },
            {
                element: <Register/>,
                path: 'register'
            }
        ]
    }
])