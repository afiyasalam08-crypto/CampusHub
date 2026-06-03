import { FaCalendarAlt } from "react-icons/fa";

const events = [
  {
    title: "React Workshop",
    date: "10 June",
    type: "Workshop",
    description:
      "Learn React, Hooks and TailwindCSS from industry experts.",
  },
  {
    title: "Cultural Fest",
    date: "15 June",
    type: "Festival",
    description:
      "Enjoy music, dance, competitions and cultural performances.",
  },
  {
    title: "AI Seminar",
    date: "20 June",
    type: "Seminar",
    description:
      "Explore the latest trends in Artificial Intelligence and ML.",
  },
];

function Events() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {events.map((event, index) => (
        <div
          key={index}
          className="bg-white rounded-3xl shadow-lg p-6 hover:-translate-y-2 hover:shadow-2xl transition duration-300"
        >
          <FaCalendarAlt className="text-4xl text-blue-600 mb-4" />

          <div className="flex justify-between items-center mb-4">
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
              {event.type}
            </span>

            <span className="text-gray-500 font-medium">
              {event.date}
            </span>
          </div>

          <h3 className="text-2xl font-bold mb-3">
            {event.title}
          </h3>

          <p className="text-gray-600 mb-5">
            {event.description}
          </p>

          <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition">
            Register Now
          </button>
        </div>
      ))}
    </div>
  );
}

export default Events;