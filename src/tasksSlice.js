import { createSlice } from '@reduxjs/toolkit'

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    taskList: [],
  },
  reducers: {
    addTask: (state, action) => {
      state.taskList.push({
        uid: Date.now() + Math.random(),
        timestamp: Date.now(),
        desc: action.payload.desc,
        complete: false
      })
    },
    removeTask: (state, action) => {
      return {
        taskList: state.taskList.filter(task => task.uid !== action.payload.uid)
      }
    },
    completeTask: (state, action) => {
      return {
        taskList: state.taskList.map(task => task.uid === action.payload.uid ? {...task, complete: true} : task)
      }
    },
    clearTasks: () => {
      return {
        taskList: []
      }
    }
  },
})


export const { addTask, removeTask, completeTask, clearTasks } = tasksSlice.actions

export default tasksSlice.reducer