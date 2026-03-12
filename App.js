
import React, { useState } from "react";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");

  const addStudent = () => {
    if (name.trim() === "") return;

    const newStudent = {
      id: Date.now(),
      name: name,
      status: "Absent"
    };

    setStudents([...students, newStudent]);
    setName("");
  };

  const markAttendance = (id) => {
    const updated = students.map((student) =>
      student.id === id
        ? {
            ...student,
            status: student.status === "Present" ? "Absent" : "Present"
          }
        : student
    );

    setStudents(updated);
  };

  return (
    <div className="container">
      <h1>Attendance Management System</h1>

      <div className="add-student">
        <input
          type="text"
          placeholder="Enter Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={addStudent}>Add Student</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Status</th>
            <th>Mark</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.status}</td>
              <td>
                <button onClick={() => markAttendance(student.id)}>
                  Toggle
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
