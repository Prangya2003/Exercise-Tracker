import React from "react";
import ExerciseItem from "./ExerciseItem";

function ExerciseList({ exercises, onDelete }) {
  if (exercises.length === 0) return <p>No exercises yet!</p>;

  return (
    <ul className="exercise-list">
      {exercises.map((ex) => (
        <ExerciseItem key={ex.id} exercise={ex} onDelete={onDelete} />
      ))}
    </ul>
  );
}

export default ExerciseList;
