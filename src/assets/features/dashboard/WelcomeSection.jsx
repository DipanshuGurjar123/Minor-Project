
import { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";

const WelcomeSection = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        setCurrentDate(new Date());
    }, []);

    const hour = currentDate.getHours();

    const greeting =
        hour < 12
            ? "Good Morning"
            : hour < 17
                ? "Good Afternoon"
                : "Good Evening";

    const formattedDate = currentDate.toLocaleDateString("en-IN", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    return (
        <section className="relative overflow-hidden rounded-3xl bg-[#E8F0E9] p-4 mx-2 sm:mx-4 lg:mx-6 my-1 sm:my-2 lg:my-3 sm:p-6 lg:p-7">

            {/* Decorative Circle */}
            <div className="absolute -right-16 -top-20 h-48 w-48 rounded-full bg-[#D3E4D6] opacity-70" />

            <div className="relative z-10 max-w-2xl">

                {/* Date */}
                <div className="mb-3 flex items-center gap-2 text-sm font-medium text-[#617B68]">
                    <Sparkles size={16} />
                    <span>{formattedDate}</span>
                </div>

                {/* Greeting */}
                <p className="mb-2 text-sm font-semibold tracking-wide text-[#63816B]">
                    {greeting}, Dipanshu 👋
                </p>

                {/* Main Heading */}
                <h1 className="max-w-xl text-2xl font-bold leading-tight tracking-tight text-[#263D30] sm:text-3xl lg:text-4xl">
                    Make today
                    <span className="block text-[#668A70]">
                        meaningful.
                    </span>
                </h1>

                {/* Description */}
                <p className="mt-2 max-w-md text-sm leading-6 text-[#65766A] sm:text-base">
                    Every small step counts. Take a moment to reflect,
                    grow and make your day a little better.
                </p>

            </div>

            {/* Bottom Label */}
            <div className="relative z-10 mt-4 flex items-center gap-2 text-xs font-medium text-[#617B68]">
                <span className="h-2 w-2 rounded-full bg-[#71967A]" />
                Your personal space to grow
            </div>

        </section>
    );
};

export default WelcomeSection;
