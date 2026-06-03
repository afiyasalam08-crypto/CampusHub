import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";



function StudentProfile() {
  const [profile, setProfile] = useState({
    name: "Afiya",
    email: "afiya@example.com",
    department: "Computer Science",
    year: "3rd Year",
    skills: "React, JavaScript, Firebase",
    linkedin: "",
    github: "",
    bio: "",
  });

  const [editing, setEditing] = useState(false);
  
  const { user } = useAuth();

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

   const saveProfile = () => {
  localStorage.setItem(
    "studentProfile",
    JSON.stringify(profile)
  );

  setEditing(false);

  alert("Profile Saved Successfully");
};

useEffect(() => {
  const savedProfile =
    localStorage.getItem("studentProfile");

  if (savedProfile) {
    setProfile(JSON.parse(savedProfile));
  }
}, []);

  return (
    <div className="min-h-screen bg-slate-100 py-10">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">

        <div className="flex flex-col items-center">

          <img
  src="https://ui-avatars.com/api/?name=A&background=2563eb&color=ffffff&size=200"
  alt="Profile"
  className="w-40 h-40 rounded-full border-4 border-blue-500 shadow-lg"
/>

          <h1 className="text-3xl font-bold mt-4">
            Student Profile
          </h1>

        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-8">

          <div>
            <label className="font-semibold">
              Name
            </label>

            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleChange}
              disabled={!editing}
              className="w-full border p-3 rounded-lg mt-2"
            />
          </div>

          <div>
            <label className="font-semibold">
              Department
            </label>

            <input
              type="text"
              name="department"
              value={profile.department}
              onChange={handleChange}
              disabled={!editing}
              className="w-full border p-3 rounded-lg mt-2"
            />
          </div>

          <div>
            <label className="font-semibold">
              Year
            </label>

            <input
              type="text"
              name="year"
              value={profile.year}
              onChange={handleChange}
              disabled={!editing}
              className="w-full border p-3 rounded-lg mt-2"
            />
          </div>

          <div>
            <label className="font-semibold">
              Skills
            </label>

            <input
              type="text"
              name="skills"
              value={profile.skills}
              onChange={handleChange}
              disabled={!editing}
              className="w-full border p-3 rounded-lg mt-2"
            />
          </div>

        </div>

        <div className="mt-6">
          <label className="font-semibold">
            LinkedIn
          </label>

          <input
            type="text"
            name="linkedin"
            value={profile.linkedin}
            onChange={handleChange}
            disabled={!editing}
            className="w-full border p-3 rounded-lg mt-2"
          />
        </div>

        <div className="mt-6">
          <label className="font-semibold">
            GitHub
          </label>

          <input
            type="text"
            name="github"
            value={profile.github}
            onChange={handleChange}
            disabled={!editing}
            className="w-full border p-3 rounded-lg mt-2"
          />
        </div>

        <div className="mt-6">
          <label className="font-semibold">
            Bio
          </label>

          <textarea
            name="bio"
            value={profile.bio}
            onChange={handleChange}
            disabled={!editing}
            rows="4"
            className="w-full border p-3 rounded-lg mt-2"
          />
        </div>

        <div>
  <label className="font-semibold">
    Email
  </label>

  <input
    type="email"
    name="email"
    value={profile.email}
    onChange={handleChange}
    disabled={!editing}
    className="w-full border p-3 rounded-lg mt-2"
  />
</div>

        <div className="mt-8 flex gap-4">

          {!editing ? (
            <button
              onClick={() => setEditing(true)}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg"
            >
              Edit Profile
            </button>
          ) : (
            <button
              onClick={saveProfile}
              className="bg-green-600 text-white px-6 py-3 rounded-lg"
            >
              Save Profile
            </button>
          )}

        </div>

      </div>
    </div>
  );
}

export default StudentProfile;