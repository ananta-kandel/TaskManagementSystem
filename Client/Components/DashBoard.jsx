import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {globalConstant} from "../Services/Constant"
import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader';
import {jwtDecode} from 'jwt-decode';
const DashBoard = () => {
  const [tasks, setTasks] = useState([]);
  const authHeader = useAuthHeader()
  const decodedToken = jwtDecode(authHeader); // Decode the JWT
  
    console.log(decodedToken);
    const userId = decodedToken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"];
  useEffect(() => {
    axios.get(`${globalConstant.serverUrl}/user/${userId}`, {
      headers: {
        Authorization:  authHeader
      }
    })
    .then(response => {
      console.log(response);
      setTasks(response.data.tasks);
    })
    .catch(error => {
      console.error('Error fetching tasks:', error);
    });
  }, []);
  

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Task List</h2>
      {tasks.length === 0 ? (
        <p>No tasks found.</p>
      ) : (
        <ul className="space-y-2">
          {tasks.map(task => (
            <li key={task.id} className="border p-3 rounded bg-gray-100">
              <h3 className="font-semibold">{task.title}</h3>
              <p>{task.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DashBoard;
