import { supabase } from "./../lib/supabase";
import Sidebar from "./components/Sidebar";
import CourseCard from "./components/CourseCard";

import {
  Bell,
  Clock3,
  Flame,
  User,
  Mail,
  Phone,
  LogOut,
  ShieldCheck,
  BookPlus,
  Moon,
} from "lucide-react";

type Course = {
  id: string;
  title: string;
  progress: number;
  icon_name: string;
};

export default async function Home() {

  const { data: courses, error } = await supabase
    .from("courses")
    .select("*");

  if (error) {

    return (

      <main className="min-h-screen bg-[#070B1A] text-white flex items-center justify-center">

        <h1 className="text-2xl text-red-400">
          Failed to fetch courses
        </h1>

      </main>

    );
  }

  return (

    <main className="relative min-h-screen bg-[#070B1A] text-white flex overflow-hidden scroll-smooth">

      {/* Grain Texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_0.5px,transparent_0.5px)] bg-[size:10px_10px]"></div>

      {/* Sidebar */}
      <Sidebar />

      {/* Main */}
      <section className="flex-1 p-4 md:p-8 overflow-y-auto pb-28 md:pb-8 relative z-10">

        {/* HERO */}
        <section
          id="dashboard"
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-purple-700/40 to-cyan-500/20 p-6 md:p-10 shadow-2xl"
        >

          {/* Mesh */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_left,#9333ea,transparent_40%),radial-gradient(circle_at_bottom_right,#06b6d4,transparent_40%)]"></div>

          <div className="relative z-10">

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight leading-tight">

              Welcome back,
              <br />

              <span className="bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
                Sai Nithin
              </span>

            </h1>

            <p className="text-white/70 text-lg mt-6 max-w-2xl">
              You’re making real progress this week.
              Keep building consistently and stay focused.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">

              <div className="flex items-center gap-2 bg-orange-500/20 border border-orange-400 rounded-full px-5 py-3 backdrop-blur-md">

                <Flame size={18} />

                7 Day Streak

              </div>

              <div className="bg-emerald-500/20 border border-emerald-400 rounded-full px-5 py-3 backdrop-blur-md">
                🟢 Active Today
              </div>

            </div>

          </div>

        </section>

        {/* MAIN GRID */}
        <section className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-8">

          {/* LEFT */}
          <section className="xl:col-span-2 space-y-6">

            {/* COURSE GRID */}
            <section
              id="courses"
              className="grid grid-cols-1 md:grid-cols-2 gap-6 scroll-mt-24"
            >

              {courses?.map((course: Course) => (

                <article key={course.id}>

                  <CourseCard
                    icon={
                      course.icon_name === "rocket"
                        ? "🚀"
                        : course.icon_name === "sparkles"
                          ? "✨"
                          : course.icon_name === "palette"
                            ? "🎨"
                            : "⚛️"
                    }
                    title={course.title}
                    progress={`${course.progress}%`}
                    width={`${course.progress}%`}
                  />

                </article>

              ))}

            </section>

            {/* ACHIEVEMENTS */}
            <section
              id="achievements"
              className="rounded-3xl border border-white/10 bg-[#111827]/80 p-6 backdrop-blur-xl scroll-mt-24"
            >

              <h2 className="text-2xl font-bold mb-6">
                Achievements
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                {[
                  "Top Performer",
                  "7 Day Streak",
                  "React Master",
                  "UI Design Expert",
                ].map((item) => (

                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5"
                  >

                    <div className="text-4xl mb-3">
                      🏆
                    </div>

                    <h3 className="text-lg font-bold">
                      {item}
                    </h3>

                    <p className="text-white/60 mt-2">
                      Achievement unlocked successfully.
                    </p>

                  </div>

                ))}

              </div>

            </section>

            {/* SCHEDULE PANEL */}
            <section
              id="schedule"
              className="rounded-3xl border border-white/10 bg-[#111827]/80 p-6 backdrop-blur-xl scroll-mt-24"
            >

              <div className="flex items-center justify-between mb-6">

                <h2 className="text-2xl font-bold">
                  Schedule & Reminders
                </h2>

                <Clock3 className="text-cyan-400" />

              </div>

              <div className="space-y-4">

                {[
                  {
                    title: "UI Assignment Submission",
                    time: "Today • 6:00 PM",
                    urgent: true,
                  },
                  {
                    title: "React Quiz",
                    time: "Tomorrow • 10:00 AM",
                    urgent: false,
                  },
                  {
                    title: "Design Review Meeting",
                    time: "Friday • 2:30 PM",
                    urgent: false,
                  },
                ].map((item) => (

                  <article
                    key={item.title}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/[0.07] transition"
                  >

                    <div>

                      <h3 className="text-lg font-semibold">
                        {item.title}
                      </h3>

                      <p className="text-white/60 mt-1">
                        {item.time}
                      </p>

                    </div>

                    {item.urgent && (

                      <div className="relative">

                        <Bell className="text-red-400 animate-pulse" />

                        <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-ping"></span>

                      </div>

                    )}

                  </article>

                ))}

              </div>

            </section>

          </section>

          {/* RIGHT */}
          <aside className="bg-[#111827]/80 border border-white/10 rounded-3xl p-5 md:p-6 shadow-xl relative overflow-hidden backdrop-blur-xl">

            {/* Mesh */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top,#9333ea,transparent_35%),radial-gradient(circle_at_bottom,#06b6d4,transparent_35%)]"></div>

            <div className="relative z-10">

              {/* STATS */}
              <h2 className="text-2xl font-bold mb-8">
                Weekly Stats
              </h2>

              <div className="space-y-6">

                {[
                  {
                    label: "Coding Hours",
                    value: "32h",
                    width: "80%",
                    color: "from-cyan-400 to-blue-500",
                  },
                  {
                    label: "Tasks Completed",
                    value: "18",
                    width: "65%",
                    color: "from-pink-500 to-purple-500",
                  },
                  {
                    label: "Focus Level",
                    value: "92%",
                    width: "92%",
                    color: "from-emerald-400 to-cyan-400",
                  },
                  {
                    label: "XP Earned",
                    value: "4,820",
                    width: "88%",
                    color: "from-yellow-400 to-orange-500",
                  },
                ].map((stat) => (

                  <div key={stat.label}>

                    <div className="flex justify-between mb-2">

                      <span className="text-white/70">
                        {stat.label}
                      </span>

                      <span>
                        {stat.value}
                      </span>

                    </div>

                    <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">

                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${stat.color}`}
                        style={{
                          width: stat.width,
                        }}
                      />

                    </div>

                  </div>

                ))}

              </div>

              {/* ACTIVITY */}
              <section
                id="activity"
                className="mt-10"
              >

                <h3 className="text-lg font-semibold mb-4">
                  Activity Graph
                </h3>

                <div className="grid grid-cols-7 gap-2">

                  {Array.from({ length: 35 }).map((_, index) => (

                    <div
                      key={index}
                      className={`aspect-square rounded-md transition duration-300 hover:scale-110 ${index % 4 === 0
                          ? "bg-cyan-400/80"
                          : index % 3 === 0
                            ? "bg-purple-500/70"
                            : index % 2 === 0
                              ? "bg-pink-500/60"
                              : "bg-white/10"
                        }`}
                    />

                  ))}

                </div>

              </section>

              {/* SETTINGS PANEL */}
              <section
                id="settings"
                className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-5 scroll-mt-24"
              >

                <div className="flex items-center justify-between mb-6">

                  <h3 className="text-xl font-bold">
                    Profile & Settings
                  </h3>

                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center text-2xl font-bold shadow-lg">
                    S
                  </div>

                </div>

                <div className="space-y-4">

                  <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#0B1023] px-4 py-4">

                    <User size={18} className="text-cyan-400" />

                    <div>
                      <p className="text-white/40 text-sm">
                        Full Name
                      </p>

                      <h4 className="font-medium">
                        Sai Nithin
                      </h4>
                    </div>

                  </div>

                  <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#0B1023] px-4 py-4">

                    <Mail size={18} className="text-purple-400" />

                    <div>
                      <p className="text-white/40 text-sm">
                        Email
                      </p>

                      <h4 className="font-medium">
                        sainithin@example.com
                      </h4>
                    </div>

                  </div>

                  <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#0B1023] px-4 py-4">

                    <Phone size={18} className="text-emerald-400" />

                    <div>
                      <p className="text-white/40 text-sm">
                        Phone Number
                      </p>

                      <h4 className="font-medium">
                        +91 9876543210
                      </h4>
                    </div>

                  </div>

                </div>

                <div className="mt-8 space-y-4">

                  <button className="w-full flex items-center justify-center gap-2 rounded-2xl bg-purple-600/20 border border-purple-500 py-3 hover:bg-purple-600/30 transition font-medium">

                    <User size={18} />

                    Edit Username

                  </button>

                  <button className="w-full flex items-center justify-center gap-2 rounded-2xl bg-cyan-500/20 border border-cyan-400 py-3 hover:bg-cyan-500/30 transition font-medium">

                    <ShieldCheck size={18} />

                    Change Password

                  </button>

                  <button className="w-full flex items-center justify-center gap-2 rounded-2xl bg-emerald-500/20 border border-emerald-400 py-3 hover:bg-emerald-500/30 transition font-medium">

                    <BookPlus size={18} />

                    Add Courses

                  </button>

                </div>

                <div className="mt-8 space-y-4">

                  <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#0B1023] px-4 py-4">

                    <div>

                      <h4 className="font-medium">
                        Notifications
                      </h4>

                      <p className="text-white/40 text-sm mt-1">
                        Enable reminders & alarms
                      </p>

                    </div>

                    <div className="w-14 h-8 rounded-full bg-cyan-500 relative">

                      <div className="absolute top-1 right-1 w-6 h-6 rounded-full bg-white"></div>

                    </div>

                  </div>

                  <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#0B1023] px-4 py-4">

                    <div>

                      <h4 className="font-medium flex items-center gap-2">
                        <Moon size={16} />
                        Dark Mode
                      </h4>

                      <p className="text-white/40 text-sm mt-1">
                        Optimized dashboard theme
                      </p>

                    </div>

                    <div className="w-14 h-8 rounded-full bg-purple-500 relative">

                      <div className="absolute top-1 right-1 w-6 h-6 rounded-full bg-white"></div>

                    </div>

                  </div>

                </div>

                <button className="mt-8 w-full flex items-center justify-center gap-2 rounded-2xl bg-red-500/20 border border-red-400 py-3 hover:bg-red-500/30 transition font-semibold">

                  <LogOut size={18} />

                  Logout

                </button>

              </section>

            </div>

          </aside>

        </section>

      </section>

    </main>

  );
}