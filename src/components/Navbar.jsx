// Page title / breadcrumb
// Search bar
// Notification icon
// User profile / avatar


import {
  Search,
  Bell,
  ChevronDown,
  Sun,
} from "lucide-react";

const Navbar = () => {
  return (
    <header className="w-full h-[76px] bg-[#FAFAF7] border-b border-[#EAEAE5] flex items-center justify-between px-4 sm:px-5 lg:px-7 sticky top-0 z-30">

      {/* Left Section */}
      <div className="flex flex-col ml-12 lg:ml-0">
        <h1 className="text-lg sm:text-xl font-semibold text-[#263D30]">
          Dashboard
        </h1>

        <p className="text-xs text-[#929991] sm:block">
          Workspace / Dashboard
        </p>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-2 sm:gap-4">

        {/* Search Bar */}
        <div className="hidden md:flex items-center gap-2 bg-[#F0F1EB] rounded-xl px-4 py-2.5 w-52 lg:w-64 border border-transparent focus-within:border-[#B7CDBB] transition">
          <Search size={17} className="text-[#929991]" />

          <input
            type="text"
            placeholder="Search anything..."
            className="w-full bg-transparent outline-none text-sm text-[#263D30] placeholder:text-[#A0A69F]"
          />

          <span className="text-[10px] text-gray-400 border border-gray-300 rounded px-1.5 py-0.5">
            /
          </span>
        </div>

        {/* Theme Button */}
        <button
          className="w-10 h-10 rounded-xl flex items-center justify-center text-[#747B75] hover:bg-[#EFF1EC] transition"
          title="Theme"
        >
          <Sun size={19} />
        </button>

        {/* Notification */}
        <button
          className="relative w-10 h-10 rounded-xl flex items-center justify-center text-[#747B75] hover:bg-[#EFF1EC] transition"
          title="Notifications"
        >
          <Bell size={19} />

          <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#D58B72] border-2 border-[#FAFAF7]"></span>
        </button>

        {/* Divider */}
        <div className="hidden sm:block h-8 w-px bg-[#EAEAE5]"></div>

        {/* Profile */}
        <button className="flex items-center gap-2 sm:gap-3 rounded-xl p-1.5 hover:bg-[#EFF1EC] transition">

          <div className="w-9 h-9 rounded-full bg-[#E3EDE5] flex items-center justify-center text-sm font-semibold text-[#315B43]">
            D
          </div>

          <div className="hidden sm:flex flex-col items-start">
            <span className="text-sm font-semibold text-[#35483A]">
              Dipanshu
            </span>

            <span className="text-[11px] text-[#929991]">
              Personal Space
            </span>
          </div>

          <ChevronDown
            size={15}
            className="hidden sm:block text-[#929991]"
          />
        </button>

      </div>
    </header>
  );
};

export default Navbar;
