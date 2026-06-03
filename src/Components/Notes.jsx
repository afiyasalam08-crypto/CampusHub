import { FaBookOpen, FaDownload } from "react-icons/fa";

const notes = [
  {
    subject: "Data Structures",
    semester: "Semester 3",
    downloads: 245,
  },
  {
    subject: "DBMS",
    semester: "Semester 4",
    downloads: 198,
  },
  {
    subject: "Operating Systems",
    semester: "Semester 4",
    downloads: 320,
  },
  {
    subject: "Computer Networks",
    semester: "Semester 5",
    downloads: 287,
  },
];

function Notes() {
  return (
    <div>

      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8">

        <h2 className="text-4xl font-bold">
          📚 Study Materials
        </h2>

        <input
          type="text"
          placeholder="Search notes..."
          className="mt-4 md:mt-0 border border-gray-300 rounded-xl px-4 py-3 w-full md:w-72 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        {notes.map((note, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-lg p-6 hover:-translate-y-2 hover:shadow-2xl transition duration-300"
          >

            <FaBookOpen className="text-4xl text-green-600 mb-4" />

            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
              {note.semester}
            </span>

            <h3 className="text-xl font-bold mt-4">
              {note.subject}
            </h3>

            <p className="text-gray-500 mt-2">
              {note.downloads} Downloads
            </p>

            <button className="mt-5 w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition flex items-center justify-center gap-2">
              <FaDownload />
              Download Notes
            </button>

          </div>
        ))}

      </div>
    </div>
  );
}

export default Notes;