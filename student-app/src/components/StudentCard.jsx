function StudentCard({ student, onDelete, onEdit }) {
  const notes = student.notes || {};

  return (
    <div className="card">
      <h3>{student.name}</h3>
      <p>Age: {student.age}</p>
      <p>Section: {student.section}</p>

      <p>Math: {notes.mat1 ?? "-"}</p>
      <p>Algo: {notes.mat2 ?? "-"}</p>
      <p>Web: {notes.mat3 ?? "-"}</p>

      <p className="moyenne">Moyenne: {student.moyenne?.toFixed(2)}</p>

      <div className="actions">
        <button onClick={() => onEdit(student)}>Update</button>
        <button onClick={() => onDelete(student._id)} className="danger">
          Delete
        </button>
      </div>
    </div>
  );
}

export default StudentCard;
