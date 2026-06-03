import Hero from "../Components/Hero";
import Announcements from "../Components/Announcements";
import Events from "../Components/Events";
import Notes from "../Components/Notes";
import Clubs from "../Components/Clubs";
import CGPACalculator from "../Components/CGPACalculator";
import {
  FaBook,
  FaCalendarAlt,
  FaUsers,
  FaComments
} from "react-icons/fa";

function Home() {
  return (
    <div className="bg-slate-100 min-h-screen">

      <Hero />

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-6 -mt-12 relative z-10">
        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <h2 className="text-4xl font-bold text-blue-600">1500+</h2>
            <p className="text-gray-600 mt-2">Students</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <h2 className="text-4xl font-bold text-green-600">120+</h2>
            <p className="text-gray-600 mt-2">Events</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <h2 className="text-4xl font-bold text-purple-600">50+</h2>
            <p className="text-gray-600 mt-2">Clubs</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <h2 className="text-4xl font-bold text-red-600">500+</h2>
            <p className="text-gray-600 mt-2">Resources</p>
          </div>

        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-3xl p-8 shadow-xl mb-10">
          <h2 className="text-3xl font-bold">
            Welcome to CampusHub 🎓
          </h2>

          <p className="mt-3 text-lg">
            Your one-stop platform for events, notes,
            clubs, announcements and student networking.
          </p>
        </div>

        {/* Announcement + Notice */}
        <div className="grid lg:grid-cols-3 gap-8">

          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-lg p-6">
              <Announcements />
            </div>
          </div>

          <div>
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-3xl shadow-lg p-6">

              <h2 className="text-2xl font-bold">
                📢 Important Notice
              </h2>

              <p className="mt-4">
                Semester Exams begin June 15.
              </p>

              <p className="mt-2">
                Hall tickets will be available from June 10.
              </p>

            </div>
          </div>

        </div>

        {/* Quick Features */}
        <section className="mt-14">

  <h2 className="text-4xl font-bold text-center mb-10">
    Explore CampusHub
  </h2>

  <div className="grid md:grid-cols-4 gap-6">

    <div className="bg-white rounded-2xl shadow-lg p-6 hover:-translate-y-2 hover:shadow-2xl transition">

      <FaBook className="text-4xl text-blue-600 mb-4" />

      <h3 className="text-xl font-bold mb-3">
        Notes Sharing
      </h3>

      <p className="text-gray-600">
        Access and share study materials for every subject.
      </p>

    </div>

    <div className="bg-white rounded-2xl shadow-lg p-6 hover:-translate-y-2 hover:shadow-2xl transition">

      <FaCalendarAlt className="text-4xl text-green-600 mb-4" />

      <h3 className="text-xl font-bold mb-3">
        Events
      </h3>

      <p className="text-gray-600">
        Workshops, seminars, hackathons and cultural programs.
      </p>

    </div>

    <div className="bg-white rounded-2xl shadow-lg p-6 hover:-translate-y-2 hover:shadow-2xl transition">

      <FaUsers className="text-4xl text-purple-600 mb-4" />

      <h3 className="text-xl font-bold mb-3">
        Clubs
      </h3>

      <p className="text-gray-600">
        Join technical, cultural and sports communities.
      </p>

    </div>

    <div className="bg-white rounded-2xl shadow-lg p-6 hover:-translate-y-2 hover:shadow-2xl transition">

      <FaComments className="text-4xl text-red-600 mb-4" />

      <h3 className="text-xl font-bold mb-3">
        Forum
      </h3>

      <p className="text-gray-600">
        Discuss academics, projects and opportunities.
      </p>

    </div>

  </div>

        </section>

        {/* Events */}
        <section className="mt-16">
          <h2 className="text-4xl font-bold text-center mb-8">
            Upcoming Events
          </h2>

          <Events />
        </section>

        {/* Notes */}
        <section className="mt-16">
          <Notes />
        </section>

        {/* Clubs */}
        <section className="mt-16">
          <Clubs />
        </section>

        {/* CGPA */}
        <section className="mt-16">
          <CGPACalculator />
        </section>

      </div>
    </div>
  );
}

export default Home;