
import { ArrowUpRight, Sparkles } from "lucide-react";

const HabitOverview = () => {
  // Temporary sample data
  const totalHabits = 4;
  const completedHabits = 2;
  const remainingHabits = totalHabits - completedHabits;

  // Calculate progress
  const progress =
    totalHabits === 0
      ? 0
      : Math.round((completedHabits / totalHabits) * 100);

  return (
    <section className="space-y-5 relative overflow-hidden rounded-3xl bg-[#E8F0E9] p-4 mx-2 sm:mx-4 lg:mx-6 my-1 sm:my-2 lg:my-3 sm:p-6 lg:p-7">

      {/* Part 1: Section Header */}
      <div className="flex items-center justify-between gap-3">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#263D30]">
            Today's Habits
          </h2>

          <p className="mt-1 text-xs sm:text-sm text-[#929991]">
            Build consistency, one day at a time.
          </p>
        </div>

        <button className="flex items-center gap-1 text-sm font-semibold text-[#52745B] hover:text-[#365B40]">
          View All
          <ArrowUpRight size={16} />
        </button>
      </div>

      {/* Part 2: Progress Summary */}
      <div className="rounded-2xl border border-[#E5EAE3] bg-[#E8F0E9] p-5 sm:p-6">

        {/* Progress Heading */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles size={17} className="text-[#52745B]" />

            <h3 className="text-sm font-semibold text-[#365B40]">
              Today's Progress
            </h3>
          </div>

          <span className="rounded-full bg-white/70 px-3 py-1 text-[11px] font-medium text-[#52745B]">
            {progress === 100 ? "Completed" : "In Progress"}
          </span>
        </div>

        {/* Completed Habits & Percentage */}
        <div className="mt-6 flex items-end justify-between">
          <div>
            <h3 className="text-3xl font-bold text-[#263D30]">
              {completedHabits}
              <span className="text-lg font-medium text-[#829084]">
                {" "}/ {totalHabits}
              </span>
            </h3>

            <p className="mt-1 text-xs text-[#718174]">
              Habits completed
            </p>
          </div>

          <span className="text-2xl font-bold text-[#52745B]">
            {progress}%
          </span>
        </div>

        {/* Progress Bar */}
        <div className="mt-5 h-2.5 w-full overflow-hidden rounded-full bg-white/70">
          <div
            className="h-full rounded-full bg-[#63876A] transition-all duration-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Completed & Remaining */}
        <div className="mt-3 flex items-center justify-between text-xs">
          <span className="font-medium text-[#52745B]">
            {completedHabits} completed
          </span>

          <span className="text-[#829084]">
            {remainingHabits} remaining
          </span>
        </div>

      </div>
    </section>
  );
};

export default HabitOverview;
