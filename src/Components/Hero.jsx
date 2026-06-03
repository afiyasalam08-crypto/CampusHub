function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 text-white">

      {/* Background Blur Circles */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-400 opacity-20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <div>

            <span className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium">
              🎓 Smart College Management Platform
            </span>

            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mt-6">
              Welcome to
              <span className="block text-yellow-300">
                CampusHub
              </span>
            </h1>

            <p className="text-xl text-gray-200 mt-6 max-w-xl">
              Connect with classmates, access study materials,
              discover events, join clubs, and stay updated
              with announcements — all in one place.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">

              <button className="bg-white text-blue-700 px-8 py-4 rounded-xl font-bold shadow-lg hover:scale-105 transition">
                Explore Campus
              </button>

              <button className="border-2 border-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-blue-700 transition">
                Join Community
              </button>

            </div>

          </div>

          {/* Right Side */}
          <div className="flex justify-center">

            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl w-full max-w-md">

              <h3 className="text-2xl font-bold mb-6">
                Quick Stats
              </h3>

              <div className="space-y-4">

                <div className="flex justify-between">
                  <span>Students</span>
                  <span className="font-bold">1500+</span>
                </div>

                <div className="flex justify-between">
                  <span>Events</span>
                  <span className="font-bold">120+</span>
                </div>

                <div className="flex justify-between">
                  <span>Clubs</span>
                  <span className="font-bold">50+</span>
                </div>

                <div className="flex justify-between">
                  <span>Resources</span>
                  <span className="font-bold">500+</span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;