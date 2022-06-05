import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    defaultTheme: true,
    tasks: [],
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.unshift({
        uid: Date.now() + Math.random(),
        timestamp: Date.now(),
        desc: action.payload.desc,
        complete: false
      })
    },
    removeTask: (state, action) => {
      return {
        ...state,
        tasks: state.tasks.filter(task => task.uid !== action.payload.uid)
      }
    },
    completeTask: (state, action) => {
      return {
        ...state,
        tasks: state.tasks.map(task => task.uid === action.payload.uid ? {...task, complete: true, completedAt: Date.now() } : task)
      }
    },
    signOut: () => {
      return {
        name: '',
        defaultTheme: true,
        tasks: []
      }
    },
    signIn: (state, action) => {
      return {
        ...state,
        name: action.payload.name
      }

    },
    updateName: (state, action) => {
      return {
          ...state,
          name: action.payload.name
      }
    },
    updateTheme: (state) => {
      return {
        ...state,
        defaultTheme: !state.defaultTheme
      }
    }
  },
})


export const { addTask, removeTask, completeTask, signOut, signIn, updateName, updateTheme } = userSlice.actions

export default userSlice.reducer