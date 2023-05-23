import { createBrowserRouter } from "react-router-dom"

import SignUp from "../pages/SignUp"
import ForgetPassword from "../pages/ForgetPassword"

import SignIn from "../pages/SignIn"
import Layout from "../components/Block/Layout"



export const mainRoute = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
          
            {
                path: "forgetpassword",
                element: <ForgetPassword />
                
            },
            {
                path: "signup",
                element: <SignUp />
            },
            {
                path: "/",
                element: <SignIn />
            },
       
        ]

    }
]) 