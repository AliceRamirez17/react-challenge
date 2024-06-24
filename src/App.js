import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import ReminderList from './components/remindersList';
import ReminderForm from './components/reminderForm';

function App() {
  return (
    <div className="flex">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Navigate to={"/calendar"}/>} />
            <Route path='/calendar' element={<ReminderList/>} />
            <Route path='/add-reminder' element={<ReminderForm/>} />
            <Route path='/edit-reminder/:id' element={<ReminderForm/>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
