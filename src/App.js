import Sidebar from "./components/Layout/DefaultLayout/Sidebar/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Overview from './pages/Overview';
import User from "./pages/User";
import { Fragment, useState } from "react";
import { privateRoutes } from "./routes";
import { DefaultLayout } from "./components/Layout";


function App() {

  const [isLogin, setIsLogin] = useState(false);

  const handleLogin = (useName) => {
    setIsLogin(useName);
  }

  return (
    <Router>
      {/* <Sidebar /> */}
      <Routes>

        {privateRoutes.map((route, index)=> {
          const Page = route.component

          let Layout = DefaultLayout
          
          if (route.layout) {
            Layout = route.layout
          } else if (route.layout === null) {
            Layout = route.layout
          }

          return <Route key={index} path={route.path} element={
            <Layout>
                <Page />
            </Layout>} />
        })}

        {/* <Route path='/overview' exact element={<Overview isLogin={isLogin} handleLogin={handleLogin}/>} />
        <Route path='/overview/users' exact element={<User/>} /> */}
      </Routes>

    </Router>
  );
}

export default App;
