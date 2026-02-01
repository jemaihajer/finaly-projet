import { useState } from "react";

function StudentForm({ onAdd }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [moyenne, setMoyenne] = useState("");
  const [section, setSection] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !age || !moyenne || !section) {
      alert("remplir !!");
      return;
    }

    onAdd({ name, age, moyenne, section });

    setName("");
    setAge("");
    setMoyenne("");
    setSection("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />

      <input
        type="number"
        placeholder="Moyenne"
        value={moyenne}
        onChange={(e) => setMoyenne(e.target.value)}
      />

      {/*  Section List */}
      <select value={section} onChange={(e) => setSection(e.target.value)}>
        <option value="">-- Choisir Section --</option>
        <option value="TI">Technologie Informatique</option>
        <option value="GL">Génie Logiciel</option>
        <option value="RS">Réseaux</option>
        <option value="SI">Systèmes d'Information</option>
      </select>

      <button type="submit"> Add Student</button>
    </form>
  );
}

export default StudentForm;
