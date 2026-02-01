import { useEffect, useState } from "react";
import Header from "./components/Header";
import StudentCard from "./components/StudentCard";
import "./App.css";

const API = "http://localhost:5000/api/students";

function App() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [section, setSection] = useState("");
  const [mat1, setMat1] = useState("");
  const [mat2, setMat2] = useState("");
  const [mat3, setMat3] = useState("");
  const [editId, setEditId] = useState(null);

  // Fetch students
  const fetchStudents = async () => {
    const res = await fetch(API);
    const data = await res.json();
    setStudents(data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const resetForm = () => {
    setName("");
    setAge("");
    setSection("");
    setMat1("");
    setMat2("");
    setMat3("");
    setEditId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const moyenne =
      (Number(mat1) + Number(mat2) + Number(mat3)) / 3 || 0;

    const studentData = {
      name,
      age,
      section,
      notes: { mat1, mat2, mat3 },
      moyenne,
    };

    if (editId) {
      await fetch(`${API}/${editId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(studentData),
      });
    } else {
      await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(studentData),
      });
    }

    fetchStudents();
    resetForm();
  };

  const handleDelete = async (id) => {
    await fetch(`${API}/${id}`, { method: "DELETE" });
    fetchStudents();
  };

  const handleEdit = (student) => {
    setName(student.name);
    setAge(student.age);
    setSection(student.section);
    setMat1(student.notes?.mat1 || "");
    setMat2(student.notes?.mat2 || "");
    setMat3(student.notes?.mat3 || "");
    setEditId(student._id);
  };

  return (
    <>
      <Header />

      <div className="container">
        <h1>Student Management</h1>

        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="number"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />

          <select
            value={section}
            onChange={(e) => setSection(e.target.value)}
            required
          >
            <option value="">Select section</option>
            <option value="GLSI">GLSI</option>
            <option value="TI">TI</option>
            <option value="DSI">DSI</option>
          </select>

          <input
            type="number"
            placeholder="Math"
            value={mat1}
            onChange={(e) => setMat1(e.target.value)}
            required
          />

          <input
            type="number"
            placeholder="Algo"
            value={mat2}
            onChange={(e) => setMat2(e.target.value)}
            required
          />

          <input
            type="number"
            placeholder="Web"
            value={mat3}
            onChange={(e) => setMat3(e.target.value)}
            required
          />

          <button type="submit">
            {editId ? "Update Student" : "Add Student"}
          </button>
        </form>

        <div className="cards">
          {students.length === 0 ? (
            <p>No students found</p>
          ) : (
            students.map((s) => (
              <StudentCard
                key={s._id}
                student={s}
                onDelete={handleDelete}
                onEdit={handleEdit}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default App;
