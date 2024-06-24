import { configureStore } from '@reduxjs/toolkit'
import reminderReducer from '../features/reminders/reminderSlice.js'
import weatherReducer from '../features/weather/weatherSlice.js'
import cityReducer from '../features/cities/citySlice.js'
import daysReducer from '../features/days/daysSlice'

const store = configureStore({
    reducer: {
        reminders: reminderReducer,
        weather: weatherReducer,
        cities: cityReducer,
        days: daysReducer 
    }
})

export default store;