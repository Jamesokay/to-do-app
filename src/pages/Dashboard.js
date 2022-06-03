import React from 'react'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import AddToDo from '../components/AddToDo'

export default function Dashboard() {
    return (
        <>
        <NavBar />
        <div className='page'>
            <SideBar />
            <AddToDo />
        </div>
        </>
    )
}
