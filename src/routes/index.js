// Layouts
import { HeaderOnly } from "../components/Layout"

import Home from "../pages/Home"
import Login from "../pages/Login/Login"
import Overview from "../pages/Overview"
import User from "../pages/User"


// Public Routes
const publicRoutes = [
    { path: '/login', component: Login}
]

// Private Routes
const privateRoutes = [
    { path: '/', component: Home},
    { path: '/overview', component: Overview},
    { path: '/overview/users', component: User, layout: HeaderOnly},
]

export { publicRoutes, privateRoutes }