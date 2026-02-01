function StudentList({ students, onDelete }) {
  if (students.length === 0) {
    return <p>No students found</p>;
  }

  return (
    <ul className="list">
      {students.map((s) => (
        <li key={s._id} className="card">
          <div>
            <strong>{s.name}</strong> ({s.age} ans)
          </div>
          <div> Section: {s.section}</div>
          <div> Moyenne: {s.moyenne}</div>
          <button onClick={() => onDelete(s._id)}> Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default StudentList;
