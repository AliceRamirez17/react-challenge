/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addReminder, updateReminder } from '../features/reminders/reminderSlice'
import { v4 as uuid } from 'uuid'
import { useNavigate, useParams, Link } from 'react-router-dom'

// import { fetchWeather } from '../features/weather/weatherSlice';

function ReminderForm() {

    const [reminder, setReminder] = useState({
        title: '',
        date: '',
        time: '',
        city: '',
        weather: ''
    })

    const [cityKey, setCityKey] = useState('')
    const [weatherCity, setWeatherCity] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const params = useParams()
    const reminders = useSelector(state => state.reminders)

    const handleChange = e => {
       setReminder({
        ...reminder,
        [e.target.name]: e.target.value,
       })
    }

    useEffect(()=>{
        if(cityKey){
            fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/1day/${cityKey}?apikey=TkOyW3hwrFcaX7nb0aCpHlIM9ko2EPb2`)
                .then((res) => res.json())
                .then((data) => {
                    console.log(data.DailyForecasts[0].Day.IconPhrase)
                    setWeatherCity(data.DailyForecasts[0].Day.IconPhrase)
                })
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        if(params.id) {
            dispatch(updateReminder(reminder))
        } else{
            dispatch(addReminder({
                ...reminder,
                id: uuid(),
                city: cityKey,
                weather: weatherCity
            }))
        }
        navigate('/')
    }

    useEffect(()=>{
        if (params.id){
            setReminder(reminders.find((reminder) => reminder.id === params.id)) 
        }
    },[])

    // Countries
    // const data = useSelector((state) => state.weather);
    // useEffect(() => {
    //     dispatch(fetchWeather())
    // }, [])
    //

    // List of cities
    const [city, setCity] = useState("");
    const [arrCities, setArrCities] = useState([])
    const handleCity = (e) => {
        e.preventDefault()
        setCity(e.target.value)
    }
    useEffect(() =>{
        if(city.length > 1) {
            fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=N9YbR4XdA5gmudAGlKyDuh3ho4PZKq0G&q=${city}`)
                .then((res) => res.json())
                .then((data) => {
                    setArrCities(data)
                    console.log(arrCities)
                })
                .catch((err) => console.log)
        }
        
    },[city])

    // const handleKey = (k) => {
    //     console.log(k)
    // }

    return (
        <div className='flex w-full justify-center items-center h-screen'>
            {/* {
                data.loading ? <h1>Loading...</h1> :
                data.data.map(e => {
                    return <p>{e.LocalizedName}</p>
                })
            } */}

            <form className="w-96 flex flex-col justify-around p-3 bg-slate-400 rounded" onSubmit={handleSubmit}>
                <input
                    className='bg-slate-100 p-2 mb-2 rounded' 
                    name='title'
                    type="text" 
                    placeholder="Add title reminder"
                    onChange={handleChange}
                    value={reminder.title}
                />
                <input
                    className='bg-slate-100 p-2 mb-2 rounded' 
                    name="date" 
                    type="date" 
                    onChange={handleChange}
                    value={reminder.date}
                />

                <input 
                    className='bg-slate-100 p-2 mb-2 rounded' 
                    name="time"
                    type="time" 
                    onChange={handleChange}
                    value={reminder.time}
                />

                {/* <select onChange={handleChange} name="country" id="">
                    <option value="País">País</option>
                    {data.data.map((e, i) => {
                        return <option key={i} value={e.ID}>{e.LocalizedName}</option>
                    })}
                </select> */}

                <input 
                    className='bg-slate-100 p-2 rounded' 
                    type="text" 
                    placeholder="Search city"
                    onChange={handleCity}
                />

                <ul className={`bg-slate-100 h-20 overflow-y-scroll ${city.length > 1 ? 'block' : 'hidden'}`} >
                    {
                        arrCities.map((c)=>{
                            return <li 
                                        onClick={()=>setCityKey(c.Key)}
                                        className="cursor-pointer hover:bg-slate-200" 
                                        key={c.Key} 
                                        value={c.key}>{c.LocalizedName + ", " + c.AdministrativeArea.LocalizedName + " , " + c.Country.LocalizedName}
                                    </li>
                        })
                    }
                </ul>
                {/* <select 
                    className='bg-slate-100 p-2 mb-2 rounded' 
                    name="city" 
                    id=""
                >
                    <option value="Ciudad">Ciudad</option>
                    {arrCities.map((c) => {
                        return <option key={c.Key} value={c.key}>{c.Country.LocalizedName + " - " + c.LocalizedName}</option>
                    })}
                </select> */}

                <div className='flex flex-row justify-around w-full mt-2'>
                    <Link className='bg-red-600 px-3 py-1 rounded text-sm text-white' to={"/calendar"}>Cancel</Link>
                    <button className='bg-indigo-600 px-3 py-1 rounded text-sm text-white'>
                        Guardar
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ReminderForm