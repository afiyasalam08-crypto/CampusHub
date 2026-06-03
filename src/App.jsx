import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import EventsPage from "./Pages/EventsPage";
import NotesPage from "./Pages/NotesPage";
import ClubsPage from "./Pages/ClubsPage";
import ForumPage from "./Pages/ForumPage";
import ProfilePage from "./Pages/ProfilePage";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import NotesUploadPage from "./Pages/NotesUploadPage";
import AdminDashboard from "./Pages/AdminDashboard";
import StudentProfile from "./Pages/StudentProfile";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/notes" element={<NotesPage />} />
        <Route path="/clubs" element={<ClubsPage />} />
        <Route path="/forum" element={<ForumPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />}/>
        <Route path="/upload-notes" element={<NotesUploadPage />}/>
        <Route path="/admin" element={<AdminDashboard />}/>
        <Route path="/student-profile" element={<StudentProfile />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;