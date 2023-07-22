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
  const [formData, setFormData] = useState<userType>({
    name: "",
    surname: "",
    email: "",
  });

  const [users, setUsers] = useState<userType[]>([]);

  useEffect(() => {
    const usersLS = localStorage.getItem('users');
    if (usersLS !== null) {
      const dataUsers: userType[] = JSON.parse(usersLS) as userType[];
      dataUsers;
      setUsers(dataUsers);
    }

    users.map((user: userType, index) => {
      createUser(user.name, user.surname, user.email, index)
    })
  }, [users])

  const usersElements = users.map((user: userType, index) => createUser(user.name, user.surname, user.email, index));

  function addUser(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    console.log('prevent')
    setUsers([
      ...users,
      formData
    ])
    console.log(users)

    setFormData({
      name: "",
      surname: "",
      email: "",
    })
  }

  function createUser(name: string, surname: string, email: string, id: number) {
    return (
      <tr key={String(id)}>
        <td>{name}</td>
        <td>{surname}</td>
        <td>{email}</td>
        <td><button>delete</button></td>
      </tr>
    )
  }

  function handleChange(ev: React.ChangeEvent<HTMLInputElement>) {
    const { name, value }: { name: string, value: string } = ev.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
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
