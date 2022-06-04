import './App.css';
import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import SignIn from './pages/SignIn'
import { useSelector } from 'react-redux'

function App() {
  const user = useSelector(state => state.user.name)

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={user? <Dashboard /> : <SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
