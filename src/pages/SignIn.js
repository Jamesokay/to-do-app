import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { signIn } from '../userSlice'

export default function SignIn() {
    const dispatch = useDispatch()
    const username = useRef()
    

    const attemptSignIn = (e) => {
        e.preventDefault()
        if (username.current.value.length >= 4) {
            dispatch(signIn({name: username.current.value}))
        } else {
            console.log('too short')
        }        
    }

    return (
        <div className='signInPage'>
          <div className='signInContainer'>
            <span className='signInTitle'>To Do</span>
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
        </div>
    )
}
