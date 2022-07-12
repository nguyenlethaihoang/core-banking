// Layouts
import { HeaderOnly } from "../components/Layout"
import CustomerManagement from "../pages/CustomerManagement/CustomerManagement"

import Home from "../pages/Home"
import Login from "../pages/Login/Login"
import Slider from "../pages/Login/Slider"
import Overview from "../pages/Overview"
import User from "../pages/User"


// Public Routes
const publicRoutes = [
    { path: '/login', component: Login},
]

// Private Routes
const privateRoutes = [
    { path: '/', component: Home},
    { path: '/overview', component: Overview},
    { path: '/overview/users', component: User, layout: HeaderOnly},
    { path: '/customer_management', component: CustomerManagement},

]

export { publicRoutes, privateRoutes }