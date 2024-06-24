import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const reminderSlice = createSlice({
    name: 'reminders',
    initialState,
    reducers: {
        addReminder: (state, action) => {
            state.push(action.payload)
        },
        updateReminder: (state, action) => {
            const {id, title, date, time, weather, city} = action.payload
            const foundReminder = state.find(reminder => reminder.id === id)
            if(foundReminder) {
                foundReminder.title = title
                foundReminder.date = date
                foundReminder.time = time
                foundReminder.weather = weather
                foundReminder.city = city
            }
        },
        deleteReminder: (state, action) => {
            const reminderFound = state.find(reminder => reminder.id === action.payload)
            if (reminderFound) {
                state.splice(state.indexOf(reminderFound), 1)
            }
        } 
    }
})

export const { addReminder, updateReminder, deleteReminder } = reminderSlice.actions

export default reminderSlice.reducer