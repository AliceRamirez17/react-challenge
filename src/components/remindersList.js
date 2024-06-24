/* eslint-disable react-hooks/exhaustive-deps */
import { useSelector, useDispatch } from 'react-redux';
import { deleteReminder } from '../features/reminders/reminderSlice'
import { Link } from 'react-router-dom'
import { FaCalendarDay, FaRegClock, FaSun } from "react-icons/fa"

function RemindersList() {

    const reminders = useSelector(state => state.reminders)
    const dispatch = useDispatch()

    const arrayDays = useSelector(state => state.days)
    
    const handleDelete = (id) => {
        dispatch(deleteReminder(id))
    }

    return (
        <div className='w-full flex flex-col items-center'>
            <header className='p-5 mb-4 w-full bg-slate-200 h-14 flex justify-between items-center'>
                <h1 className='text-2xl font-bold text-indigo-600'>Calendar</h1>
                <Link className="bg-indigo-600 px-3 py-1 rounded text-sm text-white font-semibold" to='/add-reminder'>Create Reminder</Link>
            </header>

            <div className='mb-4 w-4/6 grid grid-cols-5 gap-2'>
                {reminders.map(reminder => (
                    <div className='flex flex-col bg-slate-400 text-slate-200 rounded' key={reminder.id}>
                        <div className='bg-indigo-600 w-100 p-2 rounded-t'>
                            <h3 className='text-white font-semibold'>{reminder.title}</h3>
                        </div>
                        <div className='p-2'>
                            <p className='flex items-center'><FaCalendarDay className='mr-1'/>Day: {reminder.date}</p>
                            <p className='flex items-center'><FaRegClock className='mr-1'/>Time: {reminder.time}</p>
                            <p className='flex items-center'><FaSun className='mr-1'/>Weather: {reminder.weather}</p>
                        </div>

                        <div className='p-2 flex flex-row justify-between'>
                            <button className='bg-red-600 px-3 py-1 rounded text-sm text-white' onClick={() => handleDelete(reminder.id)}>Delete</button>
                            <Link className='bg-indigo-600 px-3 py-1 rounded text-sm text-white' to={`/edit-reminder/${reminder.id}`}>Edit</Link>
                        </div>
                    </div>
                ))}
            </div>

            <div className='bg-slate-200 w-4/6 grid grid-cols-7 grid-rows-6 gap-1 mb-4'>
                {
                    arrayDays.map(d => (
                        <div key={d.n} className='calendar-day border-slate-300 bg-slate-100 h-24'>
                            <div className='flex justify-between bg-slate-400 p-1 text-slate-800'>
                                <h2>{d.day}</h2>
                                <p>{d.n}</p>
                            </div>
                            <div>
                                <p></p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default RemindersList