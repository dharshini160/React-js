import React, { useState } from "react";
import "./App.css";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Dharshini", status: "Absent" },
    { id: 2, name: "Rahul", status: "Absent" },
    { id: 3, name: "Priya", status: "Absent" }
  ]);

  const markAttendance = (id, status) => {
    const updated = students.map((student) =>
      student.id === id ? { ...student, status } : student
    );
    setStudents(updated);
  };

  return (
    <div className="container">
      <h1>Attendance Management System</h1>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>

              <td className={student.status === "Present" ? "present" : "absent"}>
                {student.status}
              </td>

              <td>
                <button
                  className="present-btn"
                  onClick={() => markAttendance(student.id, "Present")}
                >
                  Present
                </button>

                <button
                  className="absent-btn"
                  onClick={() => markAttendance(student.id, "Absent")}
                >
                  Absent
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
