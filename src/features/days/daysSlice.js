import { createSlice } from '@reduxjs/toolkit'

const initialState = [ 
    {day: "Saturday", n: "1"},
    {day: "Sunday", n:"2"},
    {day: "Monday", n: "3"},
    {day: "Tuesday", n: "4"},
    {day: "Wednesday", n: "5"},
    {day: "Thursday", n: "6"},
    {day: "Friday", n: "7"},
    {day: "Saturday", n: "8"},
    {day: "Sunday", n:"9"},
    {day: "Monday", n: "10"},
    {day: "Tuesday", n: "11"},
    {day: "Wednesday", n: "12"},
    {day: "Thursday", n: "13"},
    {day: "Friday", n: "14"},
    {day: "Saturday", n: "15"},
    {day: "Sunday", n:"16"},
    {day: "Monday", n: "17"},
    {day: "Tuesday", n: "18"},
    {day: "Wednesday", n: "19"},
    {day: "Thursday", n: "20"},
    {day: "Friday", n: "21"},
    {day: "Saturday", n: "22"},
    {day: "Sunday", n:"23"},
    {day: "Monday", n: "24"},
    {day: "Tuesday", n: "25"},
    {day: "Wednesday", n: "26"},
    {day: "Thursday", n: "27"},
    {day: "Friday", n: "28"},
    {day: "Saturday", n: "29"},
    {day: "Sunday", n:"30"},
]

export const daysSlice = createSlice({
    name: 'days',
    initialState,
    reducers: {}
})

export default daysSlice.reducer