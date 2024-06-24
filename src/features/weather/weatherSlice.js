import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchWeather = createAsyncThunk("fetchWeather", async () =>{
    const data = await fetch("http://dataservice.accuweather.com/locations/v1/countries/SAM?apikey=TkOyW3hwrFcaX7nb0aCpHlIM9ko2EPb2")
    return data.json()
})

export const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        loading: false,
        data: [],
        error: false,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchWeather.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchWeather.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload
        })
        builder.addCase(fetchWeather.rejected, (state, action) => {
            state.error = true
        })
    }
})

export default weatherSlice.reducer;