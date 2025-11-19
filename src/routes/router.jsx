import React from 'react'
import { createBrowserRouter } from 'react-router'
import Root from '../layouts/Root'
import Home from '../pages/Home/Home'
import NotFound from '../pages/NotFound/NotFound'

const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        errorElement: <NotFound/>,
        children: [
            {
                index: true,
                Component: Home
            }
        ]
    }
])
export default router