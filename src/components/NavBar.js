import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState, useRef } from 'react'
import { signOut, updateName, updateTheme } from '../userSlice'

export default function NavBar() {
    const navigate = useNavigate()
    const dispatch = useDispatch()  
    const wrapperRef = useRef(null)
    const buttonRef = useRef(null)
    const usernameRef = useRef(null)
    const [showSettings, setShowSettings] = useState(false)
    const username = useSelector(state => state.user.name)
    const defaultTheme = useSelector(state => state.user.defaultTheme)
  
    useEffect(() => {
      document.addEventListener('click', handleClickOutside, false)
      return () => {
        document.removeEventListener('click', handleClickOutside, false)
      }
    }, [])
  
    const handleClickOutside = event => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target) && !buttonRef.current.contains(event.target)) {
        setShowSettings(false)
      }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(updateName({name: usernameRef.current.value}))
        usernameRef.current.value = ''
    }

    const changeTheme = () => {
        dispatch(updateTheme({defaultTheme: !defaultTheme}))
    }

    const handleSignOut = (e) => {
        e.preventDefault()
        dispatch(signOut())
        navigate('/')
    }

    return (
        <>
        <div className={defaultTheme? 'navBar darkTheme' : 'navBar lightTheme'}>
           <span className='navLeft' ref={buttonRef} onClick={() => setShowSettings(!showSettings)}>Settings</span> 
           <span className='navCentre'>To Do</span>
           <span className='navRight' onClick={handleSignOut}>Logout</span>
        </div>
        {showSettings && (
        <div className={defaultTheme? 'settings darkSettings' : 'settings lightSettings'} ref={wrapperRef}>
          <form className='settingsForm' onSubmit={handleSubmit}>
            <input
              placeholder={username}
              type='text'
              className='settingsInput'
              ref={usernameRef}
            />
            <button className={defaultTheme? 'settingsButton darkThemeButton' : 'settingsButton lightThemeButton'}>Update</button>
          </form>
          <span className='changeTheme' onClick={() => changeTheme()}>Change Theme</span>
        </div>
        )}
        </>
    )
}
