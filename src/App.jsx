import { useState } from 'react'
import './assets/css/App.css'
import { Route, Routes } from 'react-router'
import Layout from './layout/Layout'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MuiTabs from './components/Tabs/MuiTabs'
import MuiTable from './components/MuiTable'
import MuiSceleton from './components/MuiSceleton'
import MuiProgres from './components/MuiProgres'
import MuiSnackbar from './components/MuiSnackbar'
import Muidialog from './components/Muidialog'

function App() {


  return (
    <div>

      <Routes >

        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/tab' element={<MuiTabs />} />
          <Route path='/table' element={<MuiTable />} />
          <Route path='/sceleton' element={<MuiSceleton />} />
          <Route path='/progres' element={<MuiProgres />} />
          <Route path='/snackbar' element={<MuiSnackbar/>} />
          <Route path='/dialog' element={<Muidialog/>} />

        </Route>


      </Routes>
      <ToastContainer position='top-right' autoClose={2500} />

    </div>
  )
}

export default App
