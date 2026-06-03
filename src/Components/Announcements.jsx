const announcements = [
  "Semester Exam starts on June 15",
  "Hackathon Registration Open",
  "Library Timing Extended"
];

function Announcements() {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-2xl font-bold mb-4">
        Announcements
      </h2>

      <ul className="space-y-3">
        {announcements.map((item, index) => (
          <li
            key={index}
            className="border-l-4 border-blue-500 pl-3"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Announcements;