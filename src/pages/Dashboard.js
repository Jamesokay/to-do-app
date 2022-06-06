import React from 'react'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import AddToDo from '../components/AddToDo'
import { useSelector } from 'react-redux'

export default function Dashboard() {
    const defaultTheme = useSelector(state => state.user.defaultTheme)
    return (
        <div className='container'>
          <NavBar />
          <div className={defaultTheme? 'page darkPage' : 'page lightPage'}>
            <SideBar />
            <AddToDo />
          </div>
        </div>
    )
}
