function Testimonials() {
  return (
    <section className="py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-16">
          Join Thousands of Success Stories
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-white border rounded-xl p-6"
            >
              <h3 className="font-bold">
                Member {item}
              </h3>

              <p className="text-gray-500 mt-4">
                Fitness challenges helped me stay
                consistent and achieve my goals.
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Testimonials;