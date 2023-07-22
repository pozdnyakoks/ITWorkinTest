// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Form from './components/form/form'
import Table from './components/table/table'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <main>
      <h1 className="title">User Management</h1>
      {Form()}
      {Table()}
    </main>
  )
}

export default App
