import Sidebar from "./components/Sidebar";
import CourseCard from "./components/CourseCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070B1A] text-white flex">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <section className="flex-1 p-6 md:p-8 overflow-y-auto">

        {/* Hero */}
        <div className="rounded-3xl bg-gradient-to-r from-purple-700/40 to-cyan-500/20 border border-white/10 p-8 shadow-2xl">

          <h2 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Welcome back, Sai Nithin 👋
          </h2>

          <p className="text-white/70 text-lg">
            You’re making real progress this week.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">

            <div className="bg-orange-500/20 border border-orange-400 rounded-full px-6 py-3 backdrop-blur-md">
              🔥 7 Day Streak
            </div>

            <div className="bg-emerald-500/20 border border-emerald-400 rounded-full px-6 py-3 backdrop-blur-md">
              🟢 Active Today
            </div>

          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-8">

          {/* Left Cards */}
          <div className="xl:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">

            <CourseCard
              icon="⚛️"
              title="Advanced React Patterns"
              progress="75%"
              width="75%"
            />

            <CourseCard
              icon="✨"
              title="UI Motion Design"
              progress="90%"
              width="90%"
            />

            <CourseCard
              icon="🚀"
              title="Next.js Dashboard Systems"
              progress="60%"
              width="60%"
            />

            <CourseCard
              icon="🎨"
              title="Creative UI Engineering"
              progress="95%"
              width="95%"
            />

          </div>

          {/* Right Stats Panel */}
          <div className="bg-[#111827] border border-white/10 rounded-3xl p-6 shadow-xl">

            <h3 className="text-2xl font-bold mb-6">
              Weekly Stats
            </h3>

            <div className="space-y-6">

              {/* Coding Hours */}
              <div>

                <div className="flex justify-between mb-2">
                  <span className="text-white/70">
                    Coding Hours
                  </span>

                  <span>
                    32h
                  </span>
                </div>

                <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                  <div className="w-[80%] h-full bg-gradient-to-r from-cyan-400 to-blue-500"></div>
                </div>

              </div>

              {/* Tasks */}
              <div>

                <div className="flex justify-between mb-2">
                  <span className="text-white/70">
                    Tasks Completed
                  </span>

                  <span>
                    18
                  </span>
                </div>

                <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                  <div className="w-[65%] h-full bg-gradient-to-r from-pink-500 to-purple-500"></div>
                </div>

              </div>

              {/* Focus */}
              <div>

                <div className="flex justify-between mb-2">
                  <span className="text-white/70">
                    Focus Level
                  </span>

                  <span>
                    92%
                  </span>
                </div>

                <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                  <div className="w-[92%] h-full bg-gradient-to-r from-emerald-400 to-cyan-400"></div>
                </div>

              </div>

              {/* XP */}
              <div>

                <div className="flex justify-between mb-2">
                  <span className="text-white/70">
                    XP Earned
                  </span>

                  <span>
                    4,820
                  </span>
                </div>

                <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                  <div className="w-[88%] h-full bg-gradient-to-r from-yellow-400 to-orange-500"></div>
                </div>

              </div>

            </div>

            {/* Bottom Box */}
            <div className="mt-8 rounded-2xl bg-gradient-to-r from-purple-600/20 to-cyan-500/20 border border-white/10 p-5 text-center">

              <p className="text-white/60 text-sm">
                Current Goal
              </p>

              <h4 className="text-xl font-semibold mt-2">
                To Complete Assigment
              </h4>

              <button className="mt-5 w-full bg-white text-black font-semibold py-3 rounded-xl hover:scale-[1.02] transition duration-300">
                Track Journey
              </button>  

            </div>

          </div>

        </div>

      </section>
    </main>
  );
}