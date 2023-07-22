
import './table.css'

export default function Table() {
  return (
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
        </tr>
        <tr>
          <td>Иван</td>
          <td>Иванhhhhhhhhhhhhhhов</td>
          <td>Иван@mail.ru</td>
        </tr>

      </tbody>
    </table>
  )
}