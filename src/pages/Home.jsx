//使用JSX语法新建Home组件，返回一个空的div标签
import React from'react';
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import MainContent from '@/components/MainContent'
import Trends from '@/components/Trends'
import Footer from '@/components/Footer'

const Home = () => {
    return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Sidebar />
        <MainContent />
        <Trends />
      </div>
      <Footer />
    </div>
)}
export default Home