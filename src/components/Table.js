import axios from 'axios';
import { useEffect, useState } from 'react';

const Table = () => {
  const [emps, setEmps] = useState([]);

  useEffect(async () => {
    await axios
      .get('http://localhost:3001/employees/all')
      .then((res) => setEmps(res.data.employees))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {/* <table>
        <tr>
          <th>Employee ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Username</th>
          <th>Role</th>
        </tr>
        <tr>
            <T></T>
            <T></T>
            <T></T>
            <T></T>
            <T></T>
            <T></T>
        </tr> */}
      <ul>
        {emps?.map((item, index) => (
          <>
            <li>{item.id}</li>
            <li>{item.name}</li>
            <li>{item.email}</li>
            <li>{item.username}</li>
            <li>{item.role}</li>
          </>
        ))}
      </ul>
      {/* </table> */}
    </div>
  );
};

export default Table;
