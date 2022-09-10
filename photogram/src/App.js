import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Signup from './pages/auth/SignupForm'
import Signin from './pages/auth/SigninForm'


function App() {
  return (
    <div className="App">
     <Router>
        <Routes>
          <Route path='/signup' element={<Signup/>} />
          <Route path='/signin' element={<Signin/>}/>
        </Routes>
     </Router>
    </div>
  );
}

export default App;
