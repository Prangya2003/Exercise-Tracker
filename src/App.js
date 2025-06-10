import React, { useState, useEffect } from "react";
import ExerciseForm from "./components/ExerciseForm";
import ExerciseList from "./components/ExerciseList";

function App() {
  const [exercises, setExercises] = useState(() => {
    const stored = localStorage.getItem("exercises");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("exercises", JSON.stringify(exercises));
  }, [exercises]);

  const addExercise = (exercise) => {
    setExercises([exercise, ...exercises]);
  };

  const deleteExercise = (id) => {
    setExercises(exercises.filter((e) => e.id !== id));
  };

  return (
    <div className="container">
      <h1>🏋️ Exercise Tracker</h1>
      <ExerciseForm onAdd={addExercise} />
      <ExerciseList exercises={exercises} onDelete={deleteExercise} />
    </div>
  );
}

export default App;
