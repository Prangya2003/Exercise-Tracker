import React, { useState, useEffect } from "react";
import ExerciseForm from "./components/ExerciseForm";
import ExerciseList from "./components/ExerciseList";
import SearchBar from "./components/SearchBar";
import StatsChart from "./components/StatsChart";
import ThemeToggle from "./components/ThemeToggle";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  const [exercises, setExercises] = useState(() => {
    const saved = localStorage.getItem("exercises");
    return saved ? JSON.parse(saved) : [];
  });

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    localStorage.setItem("exercises", JSON.stringify(exercises));
  }, [exercises]);

  const addExercise = (exercise) => {
    setExercises([exercise, ...exercises]);
  };

  const deleteExercise = (id) => {
    setExercises(exercises.filter((ex) => ex.id !== id));
  };

  const updateExercise = (updated) => {
    setExercises(exercises.map((ex) => (ex.id === updated.id ? updated : ex)));
  };

  const filtered = exercises.filter((ex) =>
    ex.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ThemeProvider>
      <div className="container">
        <ThemeToggle />
        <h1>🏋️‍♂️ Gym Exercise Tracker</h1>
        <ExerciseForm onAdd={addExercise} />
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <ExerciseList
          exercises={filtered}
          onDelete={deleteExercise}
          onUpdate={updateExercise}
        />
        <StatsChart exercises={exercises} />
      </div>
    </ThemeProvider>
  );
}

export default App;