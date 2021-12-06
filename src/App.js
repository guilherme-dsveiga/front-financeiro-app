import './App.css';
import axios from "axios";
import React, { useState } from 'react'

const BASE_URL = "https://backend-financeiro-app.herokuapp.com/api"

function App() {
  const fetchAllAdmins = async () => {
    const response = await axios.get(`${BASE_URL}/admins`)
    setAllAdmins(response.data[0])
  }

  const fetchAdminById = async (event) => {
    event.preventDefault();
    const response = await axios.get(`${BASE_URL}/admin/${adminId}`)
    console.log(response.data)
    setAdminById(response.data)
  }

  const [allAdmins, setAllAdmins] = useState()
  const [adminById, setAdminById] = useState()
  const [adminId, setAdminId] = useState('')

  return (
    <div className="App">
      {/*GET ALL ADMINS*/}
      <div className="fetch-item">
        <button className="fetch-button" onClick={fetchAllAdmins}>Get All Admins</button>
        <div className="response">
          {allAdmins && Object.values(allAdmins).toString()}
        </div>
      </div>

      {/*GET ADMIN BY ID*/}
      <div className="fetch-item">
        <form className="form-item" onSubmit={fetchAdminById}>
          <input type="text" id="id" name="id" placeholder="Id" value={adminId} onChange={(e) => setAdminId(e.target.value)}></input>
          <input type="submit" value="Get Admin by Id" className="fetch-button"></input>
        </form>
        <div>
        {adminById && Object.values(adminById).toString()}
        </div>
      </div>

      {/*POST NEW ADMIN*/}
      <div className="fetch-item">
        <form className="form-item" onSubmit={fetchAdminById}>
          <input type="text" id="name" name="name" placeholder="Name" value={adminId} onChange={(e) => setAdminId(e.target.value)}></input>
          <input type="email" id="email" name="email" placeholder="E-mail" value={adminId} onChange={(e) => setAdminId(e.target.value)}></input>
          <input type="password" id="password" name="password" placeholder="Password" value={adminId} onChange={(e) => setAdminId(e.target.value)}></input>
          <input type="submit" value="Create new Admin" className="fetch-button"></input>
        </form>
        <div>
        {adminById && Object.values(adminById).toString()}
        </div>
      </div>
    </div>
  );
}

export default App;
