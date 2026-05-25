export default function Loading() {

    return (
        <main className="min-h-screen bg-[#070B1A] text-white flex flex-col md:flex-row">

            {/* Sidebar Skeleton */}
            <div className="w-full md:w-64 border-b md:border-b-0 md:border-r border-white/10 p-4">

                <div className="h-10 w-40 bg-white/10 rounded-xl animate-pulse mb-6"></div>

                <div className="flex md:flex-col justify-around md:justify-start md:space-y-4">

                    {[1, 2, 3, 4, 5].map((item) => (

                        <div
                            key={item}
                            className="h-12 w-12 md:w-full bg-white/10 rounded-xl animate-pulse"
                        ></div>

                    ))}

                </div>

            </div>

            {/* Main Content */}
            <section className="flex-1 p-4 md:p-8">

                {/* Hero Skeleton */}
                <div className="rounded-3xl bg-white/5 border border-white/10 p-8 animate-pulse h-56 md:h-64"></div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">

                    {[1, 2, 3, 4, 5].map((item) => (

                        <div
                            key={item}
                            className="h-72 rounded-3xl bg-white/5 border border-white/10 animate-pulse"
                        ></div>

                    ))}

                </div>

            </section>

        </main>
    );
}