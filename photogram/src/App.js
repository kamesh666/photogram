import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Signup from './pages/auth/SignupForm'
import Signin from './pages/auth/SigninForm'
import Dashboard from './pages/dashboard/DashboardSceeen';
import Profile from './components/user/ProfileScreen';

function App() {
  return (
    <div className="App">
     <Router>
        <Routes>
          <Route path='/signup' element={<Signup/>} />
          <Route path='/signin' element={<Signin/>}/>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/profile' element={<Profile/>}/>
          
        </Routes>
     </Router>
    </div>
  );
}

export default App;
