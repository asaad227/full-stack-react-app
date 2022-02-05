import React, {useEffect, useState} from 'react';
import "./index.css"

const url = "https://app-react-database.herokuapp.com";

export default function DataBase() {

    const [api, setApi] = useState([]);
 
    async function getApi() {
      const response = await fetch(`${url}/users`);
      const data = await response.json();
  
      const { payload } = data;
      setApi(payload);
    }

    useEffect(() => {
    getApi()
    }, []);

  return <div className='table-main'>
  <table>
  <thead>
  <tr>
    <th>FirstName</th>
    <th>LastName</th>
    <th>Email</th>
    <th>DOB</th>
    </tr>
    </thead>
    {api.map((e)=>
    <tbody key={e.user_id}>
      <tr>
    <td >{e.firstname}</td>
    <td>{e.lastname}</td>
    <td>{e.email}</td>
    <td>{e.dob}</td>
    </tr>
    </tbody>)}
 
  </table>
  </div>
}
