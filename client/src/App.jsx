import React, { useState, useEffect } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import { TbBrandOpenai } from 'react-icons/tb'
import { Home, CreatePost } from './pages';

const App = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if(window.matchMedia('(prefers-color-schema: dark)').matches) {
      setTheme('dark');
    }
  }, [])
  

  useEffect(() => {
    if(theme === 'dark') {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme])
  
  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
    console.log('setting')
  };

  return (
    <BrowserRouter>
      <header className='w-full flex justify-between items-center bg-white dark:bg-dark-theme sm:px-8 px-4 py-4 border-b border-b[#e6ebf4]'>
        <Link to='/'>
          {/* <img src={logo} alt='logo' className='w-28 object-contain' /> */}
          <div className='flex items-center dark:text-[#f9fafe]'><TbBrandOpenai className='text-4xl' /><span className='text-xl font-bold'>OpenAI</span></div>
        </Link>

        <button onClick={handleThemeSwitch}>Theme {theme}</button>

        <Link to='/create-post' className='font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md'>
          Create
        </Link>
      </header>
      <main className='sm:p-8 px-4 py-8 w-full bg-[#f9fafe] dark:bg-dark-theme min-h-[calc(100vh-73px)]'>
        <Routes>
          <Route  path='/' element={<Home />} />
          <Route  path='/create-post' element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App