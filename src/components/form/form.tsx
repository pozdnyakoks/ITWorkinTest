import './form.css';
// import { useState } from 'react'


export default function Form() {

  // const [nameValue, setNameValue] = useState('name');
  // const [surNameValue, setSurnameValue] = useState('surnmame');
  // const [emailValue, setEmailValue] = useState('email');

  function addUser() {

  }
  return (
    <form className="form">
      <input className="input" type="text" placeholder="Имя" />
      <input className="input" type="text" placeholder="Фамилия" />
      <input className="input" type="email" placeholder="Email" />

      <button className="btn" onSubmit={addUser}>Добавить</button>
    </form>
  )
}