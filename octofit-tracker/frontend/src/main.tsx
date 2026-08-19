import React from 'react'
import { createRoot } from 'react-dom/client'

function App() {
  return (
    <div>
      <h1>OctoFit Tracker</h1>
      <p>React 19 + Vite starter</p>
    </div>
  )
}

const root = document.getElementById('root')!
createRoot(root).render(<App />)
