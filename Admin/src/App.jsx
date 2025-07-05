import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Create_list from './components/create_list/create_list';
import Display_list from './components/display_list/display_list';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';

function App() {



  return (
    <BrowserRouter>
      <Navbar/>
      <div className='container'>
      <Sidebar/>
      <Routes>
        <Route path='/create_list' element={<Create_list/>}/>
        <Route path='/display_list' element={<Display_list/>}/>
      </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
