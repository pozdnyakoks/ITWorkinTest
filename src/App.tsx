import './App.css'
import './components/form/form.css'
import './components/table/table.css'
import { useState, useEffect } from 'react';

type userType = {
  name: string,
  surname: string,
  email: string
}



function App() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
  })

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const usersLS = localStorage.getItem('users');
    if (usersLS !== null) {
      const dataUsers: userType[] = JSON.parse(usersLS);
      setUsers(dataUsers)
    }
  }, [users])

  function createUser() {
    return (
      <tr>
        <td>{formData.name}</td>
        <td>{formData.surname}</td>
        <td>{formData.email}</td>
        <td><button>delete</button></td>
      </tr>
    )
  }

  return (
    <main>
      <h1 className="title">User Management</h1>

      <form className="form">
        <input className="input" type="text" placeholder="Имя" value={formData.name} />
        <input className="input" type="text" placeholder="Фамилия" value={formData.surname} />
        <input className="input" type="email" placeholder="Email" value={formData.email} />

        <button className="btn" onSubmit={createUser}>Добавить</button>
      </form>

      <table className="table">
        <thead>
          <tr>
            <th>Имя</th>
            <th>Фамилия</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Иван</td>
            <td>Иванов</td>
            <td>Иван@mail.ru</td>
            <td><button>delete</button></td>
          </tr>
        </tbody>
      </table>
    </main>
  )
}

export default App
