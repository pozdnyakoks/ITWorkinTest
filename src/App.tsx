import { useState, useEffect } from 'react';
import { userType } from './helpers/types';
import { emailReg } from './helpers/variables';
import randomNumber from './helpers/randomNumber';
import validate from './helpers/validate';

function App() {
  const [formData, setFormData] = useState<userType>({
    name: "",
    surname: "",
    email: "",
    id: -1
  });

  const usersLS: string | null = localStorage.getItem('users')
  const usersData: userType[] = usersLS === null ? [] : JSON.parse(usersLS) as userType[];

  const [users, setUsers] = useState<userType[]>(usersData);

  useEffect((): void => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users])

  const usersElements: JSX.Element[] = users.map((user: userType) => createUser(user.name, user.surname, user.email, user.id));

  function addUser(ev: React.FormEvent<HTMLFormElement>): void {
    ev.preventDefault();
    if (formData.name !== '' && formData.surname !== '' && emailReg.test(formData.email)) {
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
  }

  function deleteUser(id: number): void {
    setUsers((users) => users.filter((user) => user.id !== id))
  }

  function createUser(name: string, surname: string, email: string, id: number): JSX.Element {
    return (
      <tr key={String(id)} id={String(id)}>
        <td>{name}</td>
        <td>{surname}</td>
        <td>{email}</td>
        <td><button className="deleteBtn" onClick={() => deleteUser(id)}>delete</button></td>
      </tr>
    )
  }

  function handleChange(ev: React.ChangeEvent<HTMLInputElement>): void {
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
        <input className='input' type="text" name="name" placeholder="Имя" value={formData.name} onBlur={(ev) => validate(ev)} onChange={(ev) => handleChange(ev)} />
        <input className='input' type="text" name="surname" placeholder="Фамилия" value={formData.surname} onBlur={(ev) => validate(ev)} onChange={(ev) => handleChange(ev)} />
        <input className="input" type="email" name="email" placeholder="Email" value={formData.email} onBlur={(ev) => validate(ev)} onChange={(ev) => handleChange(ev)} />
        <button className="btn">Добавить</button>
      </form>
      <div className="table-wrapper">
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
      </div>
    </main>
  )
}

export default App
