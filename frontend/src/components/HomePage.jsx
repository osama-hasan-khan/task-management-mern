import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-500 text-white py-20 px-6 md:px-16 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
          Stay Organized,
          <span className="text-yellow-300">Stay Productive</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Simplify task management with a clear, collaborative, and customizable
          workspace.
        </p>
        <Link
          to="/signup"
          className="bg-yellow-400 text-blue-800 font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-yellow-300 transition duration-200 transform hover:scale-105"
        >
          Get Started Free
        </Link>
      </section>

      {/* Key Features Section */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold mb-12 text-gray-800">
          Why Choose <span className="text-blue-800">TASKER</span>
        </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: "📋",
              title: "Easy Task Creation",
              description:
                "Quickly add tasks and subtasks, set priorities, and deadlines with ease.",
            },
            {
              icon: "🤝",
              title: "Seamless Collaboration",
              description:
                "Assign tasks, share files, and keep everyone in sync.",
            },
            {
              icon: "📅",
              title: "Integrated Calendar",
              description:
                "Track deadlines with calendar views and customizable reminders.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="p-8 bg-blue-50 rounded-lg shadow-md transform transition duration-200 hover:scale-105"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-blue-700">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-12 text-gray-800">How It Works</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              step: "1",
              title: "Add Tasks",
              description:
                "Create tasks with deadlines and assign them to team members.",
            },
            {
              step: "2",
              title: "Manage & Track",
              description:
                "Monitor task progress with our real-time dashboard.",
            },
            {
              step: "3",
              title: "Complete & Review",
              description: "Mark tasks as complete and review performance.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-8 bg-white rounded-lg shadow-lg transform transition duration-200 hover:scale-105"
            >
              <div className="text-blue-500 text-5xl font-bold">
                {item.step}
              </div>
              <h3 className="text-xl font-semibold mt-4 text-gray-800">
                {item.title}
              </h3>
              <p className="mt-2 text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold mb-12 text-gray-800">
          What Our Users Say
        </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Alice Johnson",
              role: "Project Manager",
              quote: "TaskApp has transformed the way our team works together!",
            },
            {
              name: "Mike Lee",
              role: "Software Engineer",
              quote:
                "The simplicity and powerful features make it a no-brainer.",
            },
            {
              name: "Sarah Kim",
              role: "Designer",
              quote:
                "The best tool to keep projects on track and deadlines met.",
            },
          ].map((testimonial, index) => (
            <div key={index} className="p-6 bg-blue-50 rounded-lg shadow-md">
              <p className="text-gray-700 italic">&quot;{testimonial.quote}&quot;</p>
              <h3 className="mt-4 font-semibold text-gray-900">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center bg-gradient-to-r from-indigo-600 to-blue-500 text-white">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Boost Your Team&apos;s Productivity?
        </h2>
        <button className="bg-yellow-400 text-blue-800 font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-yellow-300 transition duration-200 transform hover:scale-105">
          Start Free Trial
        </button>
      </section>

      {/* Footer */}
      <footer className="p-8 bg-gray-900 text-gray-400 text-center">
        <p>© {new Date().getFullYear()} TASKER. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="#" className="hover:text-white transition">
            About
          </a>
          <a href="#" className="hover:text-white transition">
            Contact
          </a>
          <a href="#" className="hover:text-white transition">
            Privacy Policy
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
