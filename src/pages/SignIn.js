import { useRef, useContext } from 'react'
import { UserContext } from '../contexts/UserContext'

export default function SignIn() {
    const { setUser } = useContext(UserContext)
    const username = useRef()
    

    const attemptSignIn = (e) => {
        e.preventDefault()
        if (username.current.value.length >= 4) {
            setUser('user', username.current.value)
        } else {
            console.log('too short')
        }        
    }

    return (
        <div className='page'>
          <form className='userForm' onSubmit={attemptSignIn}>
              <input
                placeholder='username'
                type='text'
                required
                className='usernameInput'
                ref={username}
              />
              <button className='signInButton'>Sign In</button>
          </form>
        </div>
    )
}
