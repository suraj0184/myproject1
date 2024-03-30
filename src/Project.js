import { Search } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';

export default function Project() {
  const [userId, setuserId] = useState("");
  const [UserData, setUserData] = useState([]);
  const url = `https://api.github.com/users/${userId}/repos`;

  const getUsers = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setUserData(data);
  }


  const handleonchange = (e) => {
    setuserId(e.target.value)
  }

  //useEffect(() => {

  //  getUsers();
  //}, []);



  return (
    <>
      <div className='container'>
        <label for="exampleFormControlInput1" className="form-label "><h1>Github Fetch App</h1></label><br></br>
        <input type="email" id="suraj" placeholder="Enter Username" value={userId} onChange={handleonchange} />

        <button type="button" className="btn btn-danger my-5 mx-5" onClick={getUsers}>Submit</button>
        <h2>List of Github Repositories</h2>
        <div className="container">
          <div className="row">

            <table className="table">

              <thead>
                <tr>
                  <th scope="col" >Name</th>
                  <th scope="col">Description</th>
                  <th scope="col">link</th>
                  <th scope="col">id</th>
                </tr>
              </thead>
              <tbody>
              {
                  UserData.map((getUsers) =>
                    <tr>
                      <td>{getUsers.name}</td>
                      <td>{getUsers.full_name}</td>
                      <td>{getUsers.url}</td>
                      <td>{getUsers.id}</td>
                    </tr>
                  )
                }
               
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
