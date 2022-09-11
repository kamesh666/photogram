import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Signup from './pages/auth/SignupForm'
import Signin from './pages/auth/SigninForm'
import Dashboard from './pages/dashboard/Dashboard';
import Profile from './components/user/ProfileScreen';
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from './context/ProtectedRoute'


function App() {
  return (
    <div className="App">
     <AuthContextProvider>
     <Router>
        <Routes>
          <Route path='/signup' element={<Signup/>} />
          <Route path='/signin' element={<Signin/>}/>
          <Route path='/' element={
            <ProtectedRoute>
              <Dashboard/>
            </ProtectedRoute>
          }/>
          <Route path='/profile' element={
            <ProtectedRoute>
              <Profile/>
            </ProtectedRoute>
          }/>
          
        </Routes>
     </Router>
     </AuthContextProvider>
    </div>
  );
}

export default App;
