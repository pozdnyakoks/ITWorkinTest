import './form.css'

export default function Form() {
  return (
    <form className="form">
      <input className="input" type="text" placeholder="Имя" />
      <input className="input" type="text" placeholder="Фамилия" />
      <input className="input" type="email" placeholder="Email" />

      <button className="btn">Добавить</button>
    </form>
  )
}