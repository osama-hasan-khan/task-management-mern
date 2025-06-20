import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-28 px-6 text-center">
        <h1 className="text-5xl font-extrabold mb-4">Task List</h1>
        <p className="text-2xl mb-8">
          A minimal app to add, track, and complete your daily tasks
          efficiently.
        </p>

        <Link
          to="/signup"
          className="bg-yellow-400 text-blue-800 font-semibold py-3 px-6 rounded-full shadow hover:bg-yellow-300 transition duration-200"
        >
          Start for free
        </Link>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-2xl font-bold mb-8 text-gray-800">Core Features</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              icon: "📝",
              title: "Add Tasks",
              desc: "Quickly add tasks with titles, priorities, and due dates.",
            },
            {
              icon: "📊",
              title: "Track Progress",
              desc: "View and update task status in real-time.",
            },
            {
              icon: "✅",
              title: "Complete & Review",
              desc: "Mark tasks done and keep your day organized.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 bg-blue-50 rounded-lg shadow hover:shadow-md transition"
            >
              <div className="text-4xl mb-2">{item.icon}</div>
              <h3 className="text-xl font-semibold text-blue-700">
                {item.title}
              </h3>
              <p className="text-gray-600 mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="p-6 bg-gray-900 text-center text-gray-400">
        <p>© {new Date().getFullYear()} Task Manager.</p>
      </footer>
    </div>
  );
};

export default Homepage;
