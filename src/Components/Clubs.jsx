import { FaCode, FaFootballBall, FaMusic, FaCamera } from "react-icons/fa";

const clubs = [
  {
    name: "Coding Club",
    icon: <FaCode />,
    members: "250 Members",
    color: "text-blue-600",
  },
  {
    name: "Sports Club",
    icon: <FaFootballBall />,
    members: "180 Members",
    color: "text-green-600",
  },
  {
    name: "Music Club",
    icon: <FaMusic />,
    members: "120 Members",
    color: "text-pink-600",
  },
  {
    name: "Photography Club",
    icon: <FaCamera />,
    members: "90 Members",
    color: "text-purple-600",
  },
];

function Clubs() {
  return (
    <div>

      <h2 className="text-4xl font-bold mb-8">
        👥 Clubs & Communities
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        {clubs.map((club, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-lg p-6 hover:-translate-y-2 hover:shadow-2xl transition"
          >

            <div className={`text-5xl mb-4 ${club.color}`}>
              {club.icon}
            </div>

            <h3 className="text-2xl font-bold">
              {club.name}
            </h3>

            <p className="text-gray-500 mt-2">
              {club.members}
            </p>

            <button className="mt-5 w-full bg-indigo-600 text-white py-3 rounded-xl hover:bg-indigo-700">
              Join Club
            </button>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Clubs;