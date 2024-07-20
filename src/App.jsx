import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Notifications from './components/Notifications';
// import Messages from './components/Messages';
// import Bookmarks from './components/Bookmarks';
// import Lists from './components/Lists';
// import Profile from './components/Profile';
// import Settings from './components/Settings';
import Home from '@/pages/Home'
// import Post from '@/pages/Post'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route path="/post/:id" element={<Post/>} />  */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
