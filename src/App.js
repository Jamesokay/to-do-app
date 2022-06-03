import './App.css';
import { Routes, Route } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from './contexts/UserContext'
import Dashboard from './pages/Dashboard'
import SignIn from './pages/SignIn'

function App() {
  const { user } = useContext(UserContext)
  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={user? <Dashboard /> : <SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
