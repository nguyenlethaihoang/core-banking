import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// import { publicRoutes } from '~/routes'
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    // <Router>
    //   <div className="App">
    //       <Routes>
    //           {publicRoutes.map((route, index) => {
    //             const Page = route.component
    //             return <Route key={index} path={route.path} element={<Page />} />;
    //           })}
    //       </Routes>
    //   </div>
    // </Router>

    <Router>
      <div className='App'>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Login" element={<Login />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
