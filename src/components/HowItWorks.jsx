function HowItWorks() {
    const steps = [
        "Choose a Challenge",
        "Log Your Progress",
        "Achieve Together"
    ];
    const bgColors = [
        "bg-orange-500",
        "bg-purple-500",
        "bg-emerald-500"
    ];
    const description = [
        "Browse hundreds of fitness challenges tailored to every fitness level and goal.",
        "Check in daily, track your workouts, and watch your progress grow over time.",
        "Celebrate milestones, earn badges, and inspire others in the community."
    ]
    return (
        <section id="how" className="bg-slate-100 py-20 md:py-32">
            <div className="container mx-auto px-4 md:px-20">
                <div className="container mx-auto px-4 md:px-20">
                    <div className="mb-16 text-center">
                        <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                            How It Works
                        </h2>
                        <p className="text-center text-gray-500 text-lg py-4">Get started in three simple steps</p>
                    </div>
                </div>
                <div className="grid md:grid-cols-3 gap-8 mt-16">

                    {steps.map((step, index) => (
                        <div key={index} className="text-center">

                            <div
                                className={`w-16 h-16 rounded-full ${bgColors[index]} text-white mx-auto flex items-center justify-center text-xl font-bold`}
                            >
                                {index + 1}
                            </div>

                            <h3 className="mt-5 mb-2 text-xl font-semibold">
                                {step}
                            </h3>
                            <p className="py-3 text-gray-500">{description[index]}</p>

                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}

export default HowItWorks;