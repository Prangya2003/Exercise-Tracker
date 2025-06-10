import React, { useState } from "react";

function ExerciseItem({ exercise, onDelete, onUpdate }) {
  const [isEditing, setEditing] = useState(false);
  const [edited, setEdited] = useState({ ...exercise });

  const handleSave = () => {
    onUpdate(edited);
    setEditing(false);
  };

  return (
    <li className="exercise-item">
      {isEditing ? (
        <>
          <input
            value={edited.name}
            onChange={(e) => setEdited({ ...edited, name: e.target.value })}
          />
          <input
            type="number"
            value={edited.reps}
            onChange={(e) => setEdited({ ...edited, reps: e.target.value })}
          />
          <input
            type="date"
            value={edited.date}
            onChange={(e) => setEdited({ ...edited, date: e.target.value })}
          />
          <button onClick={handleSave}>✅</button>
        </>
      ) : (
        <>
          <div>
            <strong>{exercise.name}</strong> - {exercise.reps} reps on{" "}
            {exercise.date}
          </div>
          <div>
            <button onClick={() => setEditing(true)}><i class="fa-solid fa-pen"></i></button> 

            <button onClick={() => onDelete(exercise.id)}><i class="fa-solid fa-xmark"></i></button>
          </div>
        </>
      )}
    </li>
  );
}

export default ExerciseItem;