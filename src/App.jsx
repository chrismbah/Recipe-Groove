import React from 'react'
import Pages from './pages/Pages'
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    window.process = {
      ...window.process,
    };
  }, []);
  return (
    <div className='App'>
      <Pages />
    </div>
  )
}
