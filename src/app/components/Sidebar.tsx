export default function Sidebar() {
    return (
        <aside className="w-64 bg-[#0D1324] border-r border-white/10 p-6">
            <h1 className="text-2xl font-bold mb-10 text-white">
                NOVA LEARN 
            </h1>

            <nav className="space-y-4">
                <div className="bg-purple-600/20 border border-purple-500 rounded-xl px-4 py-3 text-white">
                    Dashboard
                </div>

                <div className="text-white/70 hover:text-white transition px-4 py-3">
                    Courses
                </div>

                <div className="text-white/70 hover:text-white transition px-4 py-3">
                    Achievements
                </div>

                <div className="text-white/70 hover:text-white transition px-4 py-3">
                    Schedule
                </div>

                <div className="text-white/70 hover:text-white transition px-4 py-3">
                    Settings
                </div>
            </nav>
        </aside>
    );
}