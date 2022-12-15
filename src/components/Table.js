import axios from 'axios';
import { useEffect, useState } from 'react';

const Table = () => {
  const [emps, setEmps] = useState([]);
  const [inp, setInp] = useState('');
  const getData = async () => {
    await axios
      .get('http://localhost:3001/employees/all')
      .then((res) => setEmps(res.data.employees));
  };

  const nameCatcher = async () => {
    await axios
      .get(`http://localhost:3001/employees/search/${inp}`)
      .then((res) => setEmps(res.data));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div>
        <input
          type="text"
          onChange={(event) => setInp(event.target.value)}
          value={inp}
          placeholder="Search for Employees..."
        />
        <button onClick={() => nameCatcher()} type="button">
          Submit
        </button>
      </div>
      <table>
        <tr>
          <th>Employee ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Username</th>
          <th>Role</th>
        </tr>

        <>
          {emps?.map((item, index) => (
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.username}</td>
              <td>{item.role}</td>
            </tr>
          ))}
        </>
      </table>
    </div>
  );
};

export default Table;
