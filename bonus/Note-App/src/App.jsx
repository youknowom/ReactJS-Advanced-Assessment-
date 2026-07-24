import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import AllNotes from "./components/AllNotes";
import AddNote from "./components/AddNote";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<AllNotes />} />
        <Route path="/add-note" element={<AddNote />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
