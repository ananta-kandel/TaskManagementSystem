import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { globalConstant } from "../Services/Constant";
import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader';
import { jwtDecode } from 'jwt-decode';
import TaskAccordingToCategories from './TaskAccordingToCategories';

const DashBoard = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ title: "", description: "" });
  const authHeader = useAuthHeader();
  
  const decodedToken = jwtDecode(authHeader); // Decode the JWT
  const userId = decodedToken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"];

  useEffect(() => {
    fetchTasks();
  }, []);

  // Fetch Tasks
  const fetchTasks = () => {
    axios.get(`${globalConstant.serverUrl}/user/${userId}`, {
      headers: { Authorization: authHeader }
    })
    .then(response => {
      setTasks(response.data.tasks);
    })
    .catch(error => console.error('Error fetching tasks:', error));
  };

  // Add New Task
  const addTask = () => {
    if (!newTask.title || !newTask.description) {
      alert("Please fill in all fields.");
      return;
    }

    axios.post(`${globalConstant.serverUrl}/tasks`, {
      userId,
      title: newTask.title,
      description: newTask.description
    }, {
      headers: { Authorization: authHeader }
    })
    .then(() => {
      fetchTasks();
      setNewTask({ title: "", description: "" });
    })
    .catch(error => console.error('Error adding task:', error));
  };

  // Edit Task
  const editTask = (taskId, updatedTitle, updatedDescription) => {
    axios.put(`${globalConstant.serverUrl}/tasks/${taskId}`, {
      title: updatedTitle,
      description: updatedDescription
    }, {
      headers: { Authorization: authHeader }
    })
    .then(() => fetchTasks())
    .catch(error => console.error('Error updating task:', error));
  };

  // Delete Task
  const deleteTask = (taskId) => {
    axios.delete(`${globalConstant.serverUrl}/tasks/${taskId}`, {
      headers: { Authorization: authHeader }
    })
    .then(() => fetchTasks())
    .catch(error => console.error('Error deleting task:', error));
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Task List</h2>
      
      {/* Add New Task */}
      <div className="mb-4 p-3 border rounded bg-gray-100">
        <h3 className="font-semibold">Add New Task</h3>
        <input
          type="text"
          placeholder="Task Title"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          className="border p-2 rounded w-full mb-2"
        />
        <textarea
          placeholder="Task Description"
          value={newTask.description}
          onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
          className="border p-2 rounded w-full mb-2"
        />
        <button 
          onClick={addTask} 
          className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Task
        </button>
      </div>

      {/* Task List */}
      {tasks.length === 0 ? (
        <p>No tasks found.</p>
      ) : (
        <ul className="space-y-2">
          {tasks.map(task => (
            <li key={task.id} className="border p-3 rounded bg-gray-100">
              <h3 className="font-semibold">{task.title}</h3>
              <p>{task.description}</p>
              
              <div className="mt-2">
                <button 
                  onClick={() => {
                    const updatedTitle = prompt("Enter new title", task.title);
                    const updatedDescription = prompt("Enter new description", task.description);
                    if (updatedTitle && updatedDescription) {
                      editTask(task.id, updatedTitle, updatedDescription);
                    }
                  }} 
                  className="bg-yellow-500 text-white px-3 py-1 rounded mr-2">
                  Edit
                </button>

                <button 
                  onClick={() => deleteTask(task.id)} 
                  className="bg-red-500 text-white px-3 py-1 rounded">
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      <TaskAccordingToCategories />
    </div>
  );
};

export default DashBoard;
