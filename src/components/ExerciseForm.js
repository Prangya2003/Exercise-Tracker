import React, { useState } from "react";

function ExerciseForm({ onAdd }) {
  const [name, setName] = useState("");
  const [reps, setReps] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !reps || !date) return;
    const newExercise = {
      id: Date.now(),
      name,
      reps: parseInt(reps),
      date
    };
    onAdd(newExercise);
    setName("");
    setReps("");
    setDate("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Exercise name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Reps"
        value={reps}
        onChange={(e) => setReps(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button type="submit">Add Exercise</button>
    </form>
  );
}

export default ExerciseForm;
