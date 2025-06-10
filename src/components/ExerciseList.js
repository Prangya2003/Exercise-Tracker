import React from "react";
import ExerciseItem from "./ExerciseItem";

function ExerciseList({ exercises, onDelete, onUpdate }) {
  if (!exercises.length) return <p>No exercises found.</p>;

  return (
    <ul className="exercise-list">
      {exercises.map((ex) => (
        <ExerciseItem
          key={ex.id}
          exercise={ex}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </ul>
  );
}

export default ExerciseList;