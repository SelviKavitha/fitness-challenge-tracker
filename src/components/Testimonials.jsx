import { FaStar } from "react-icons/fa";

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Yoga Enthusiast",
      image: "https://randomuser.me/api/portraits/women/32.jpg",
      review:
        "Joining the 30-Day Yoga Challenge completely changed my daily routine. The progress tracker and leaderboard kept me motivated every single day.",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Brown",
      role: "Fitness Trainer",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      review:
        "The challenge system is simple and fun to use. I loved competing with my friends and tracking my daily workouts.",
      rating: 5,
    },
    {
      id: 3,
      name: "Emily Davis",
      role: "Marathon Runner",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      review:
        "This platform helped me stay consistent with my running goals. The community support and daily reminders were amazing.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-slate-900">
            What Our Members Say
          </h2>

          <p className="text-lg text-gray-500 mt-3">
            Thousands of fitness enthusiasts are achieving
            their goals with FitChallenge.
          </p>
        </div>

      
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border-gray-200 p-6 shadow-sm hover:shadow-lg transition duration-300"
            >
             
              
               <div className="flex items-center gap-4 ">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 rounded-full object-cover"
                />

                <div>
                  <h3 className="font-semibold text-lg">
                    {item.name}
                  </h3>

                  <p className="text-gray-500 text-sm">
                    {item.role}
                  </p>
                </div>
              </div>
               <p className="text-gray-600 leading-7">
                "{item.review}"
              </p>

             <div className="flex gap-1 text-yellow-400 mb-4 mt-2">
                {[...Array(item.rating)].map((_, index) => (
                  <FaStar key={index} />
                ))}
              </div>
             
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Testimonials;