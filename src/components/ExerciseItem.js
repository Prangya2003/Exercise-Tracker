import React from "react";

function ExerciseItem({ exercise, onDelete }) {
  return (
    <li className="exercise-item">
      <div>
        <strong>{exercise.name}</strong> - {exercise.reps} reps on{" "}
        {exercise.date}
      </div>
      <button onClick={() => onDelete(exercise.id)}>❌</button>
    </li>
  );
}

export default ExerciseItem;
