import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { signOut } from '../userSlice'

export default function NavBar() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleSignOut = (e) => {
        e.preventDefault()
        dispatch(signOut())
        navigate('/')
    }

    return (
        <div className='navBar'>
           <span className='navLeft'>Settings</span> 
           <span className='navCentre'>To Do App</span>
           <span className='navRight' onClick={handleSignOut}>Logout</span>
        </div>
    )
}
