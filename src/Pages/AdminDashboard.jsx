import { useState } from "react";

function AdminDashboard() {
  const [announcement, setAnnouncement] = useState("");

  const [eventName, setEventName] = useState("");

  const addAnnouncement = () => {
    if (!announcement) return;

    alert("Announcement Added");

    setAnnouncement("");
  };

  return (
    <div className="min-h-screen bg-slate-100 p-8">

      <h1 className="text-4xl font-bold mb-8">
        Admin Dashboard
      </h1>

      <div className="grid md:grid-cols-4 gap-6 mb-10">

        <div className="bg-white p-6 rounded-xl shadow">
          <h3>Total Students</h3>
          <p className="text-3xl font-bold">
            1250
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3>Total Notes</h3>
          <p className="text-3xl font-bold">
            450
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3>Events</h3>
          <p className="text-3xl font-bold">
            24
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3>Clubs</h3>
          <p className="text-3xl font-bold">
            12
          </p>
        </div>

      </div>

      <div className="bg-white p-6 rounded-xl shadow">

        <h2 className="text-2xl font-bold mb-4">
          Add Announcement
        </h2>

        <input
          type="text"
          placeholder="Announcement..."
          value={announcement}
          onChange={(e) =>
            setAnnouncement(e.target.value)
          }
          className="w-full border p-3 rounded-lg mb-4"
        />

        <button
          onClick={addAnnouncement}
          className="bg-blue-600 text-white px-5 py-2 rounded-lg"
        >
          Publish
        </button>

      </div>

      <div className="bg-white p-6 rounded-xl shadow mt-8">

  <h2 className="text-2xl font-bold mb-4">
    Create Event
  </h2>

  <input
    type="text"
    placeholder="Event Name"
    value={eventName}
    onChange={(e) =>
      setEventName(e.target.value)
    }
    className="w-full border p-3 rounded-lg mb-4"
  />

  <button
    className="bg-green-600 text-white px-5 py-2 rounded-lg"
  >
    Create Event
  </button>

</div>

<div className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white p-8 rounded-2xl mb-8">
  <h1 className="text-5xl font-bold">
    CampusHub Admin
  </h1>

  <p className="mt-3">
    Manage students, notes, clubs and events
  </p>
</div>

    </div>
  );
}

export default AdminDashboard;