import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.css';
import Navbar from './components/Navbar';
import { Cartprovider } from './components/ContextReduxer';
import Home from './screens/Home';
import Login from './screens/Login';
import Signup from './screens/Signup';


function App() {
  return (
    
    <Cartprovider>

    
    <Router>
    <div>
    <Routes>
    <Route path='/' element={<Home />} ></Route>
    <Route path='/login'element={<Login />}></Route>
    <Route path='/createuser'element={<Signup />}></Route>
    </Routes>
    </div>
    </Router>
    </Cartprovider>
    
  );
}

export default App;
