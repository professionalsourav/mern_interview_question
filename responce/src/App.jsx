import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import FirstLesson from './pages/FirstLesson'
import SecondLesson from './pages/SecondLesson';
import ThirdLessson from './pages/ThirdLessson';

function App() {
 

  return (
    <>
      <Routes>
        <Route path="/" element={<FirstLesson />} />
        <Route path="/second" element={<SecondLesson />} />
        <Route path='/third' element= {<ThirdLessson/>}/>
      </Routes>
    </>
  );
}

export default App
