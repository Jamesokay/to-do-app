import { UserContext } from '../contexts/UserContext'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'

export default function NavBar() {
    const navigate = useNavigate()
    const { setUser } = useContext(UserContext)

    const signOut = (e) => {
        e.preventDefault()
        setUser(null)
        navigate('/')
    }

    return (
        <div className='navBar'>
           <span className='navLeft'>Settings</span> 
           <span className='navCentre'>To Do App</span>
           <span className='navRight' onClick={signOut}>Logout</span>
        </div>
    )
}
