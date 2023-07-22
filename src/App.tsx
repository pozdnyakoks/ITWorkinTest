import './App.css'
import './components/form/form.css'
import './components/table/table.css'
import { useState, useEffect } from 'react';

type userType = {
  name: string,
  surname: string,
  email: string,
  id: number
}

function randomNumber() {
  return Math.ceil(Math.random() * 1000000000000000);
}

function App() {
  const [formData, setFormData] = useState<userType>({
    name: "",
    surname: "",
    email: "",
    id: -1
  });

  const usersLS = localStorage.getItem('users')
  const usersData = usersLS === null ? [] : JSON.parse(usersLS) as userType[];

  const [users, setUsers] = useState<userType[]>(usersData);


  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users])

  const usersElements = users.map((user: userType) => {
    return createUser(user.name, user.surname, user.email, user.id)
  });

  function addUser(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    setUsers([
      ...users,
      formData
    ])

    setFormData({
      name: "",
      surname: "",
      email: "",
      id: -1
    })
  }

  function deleteUser(id: number) {
    setUsers((users) => {
      return users.filter((user) => user.id !== id);
    })
  }

  function createUser(name: string, surname: string, email: string, id: number) {
    return (
      <tr key={String(id)} id={String(id)}>
        <td>{name}</td>
        <td>{surname}</td>
        <td>{email}</td>
        <td><button onClick={() => deleteUser(id)}>delete</button></td>
      </tr>
    )
  }

  function handleChange(ev: React.ChangeEvent<HTMLInputElement>) {
    const { name, value }: { name: string, value: string } = ev.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
      id: randomNumber()
    }))
  }

  return (
    <main>
      <h1 className="title">User Management</h1>

      <form className="form" onSubmit={(ev) => addUser(ev)}>
        <input className="input" type="text" name="name" placeholder="Имя" value={formData.name} onChange={(ev) => handleChange(ev)} />
        <input className="input" type="text" name="surname" placeholder="Фамилия" value={formData.surname} onChange={(ev) => handleChange(ev)} />
        <input className="input" type="email" name="email" placeholder="Email" value={formData.email} onChange={(ev) => handleChange(ev)} />

        <button className="btn">Добавить</button>
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
          {usersElements}
        </tbody>
      </table>
    </main>
  )
}

export default App
