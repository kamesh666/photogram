import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Signup from './pages/auth/SignupForm'
import Signin from './pages/auth/SigninForm'
import Dashboard from './pages/dashboard/Dashboard';
import Profile from './components/user/ProfileScreen';
import { AuthContextProvider } from './context/AuthContext';

function App() {
  return (
    <div className="App">
     <AuthContextProvider>
     <Router>
        <Routes>
          <Route path='/signup' element={<Signup/>} />
          <Route path='/signin' element={<Signin/>}/>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/profile' element={<Profile/>}/>
        </Routes>
     </Router>
     </AuthContextProvider>
    </div>
  );
}

export default App;
