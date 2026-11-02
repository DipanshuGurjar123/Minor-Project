
import { useState } from "react";
import {
  LayoutDashboard,
  BookHeart,
  Target,
  Repeat,
  NotebookPen,
  CalendarDays,
  ChartNoAxesCombined,
  Settings,
  Sparkles,
  Menu,
  X,
  ChevronLeft,
} from "lucide-react";

const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard, path: "/" },
  { name: "Experiences", icon: BookHeart, path: "/experiences" },
  { name: "Habits", icon: Repeat, path: "/habits" },
  { name: "Goals", icon: Target, path: "/goals" },
  { name: "Notes", icon: NotebookPen, path: "/notes" },
  { name: "Calendar", icon: CalendarDays, path: "/calendar" },
  { name: "Insights", icon: ChartNoAxesCombined, path: "/insights" },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-xl bg-white border border-gray-200 shadow-sm"
      >
        <Menu size={22} />
      </button>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/30 z-40 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 z-50
          h-screen w-[260px]
          bg-[#FAFAF7]
          border-r border-[#EAEAE5]
          flex flex-col
          px-5 py-6
          transition-transform duration-300
          lg:translate-x-0
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Logo */}
        <div className="flex items-center justify-between mb-10 px-2">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-[#E6EFE8] flex items-center justify-center text-[#315B43]">
              <BookHeart size={21} />
            </div>

            <span className="text-xl font-bold tracking-tight text-[#263D30]">
              Life Journal
            </span>
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="lg:hidden text-gray-500 hover:text-gray-900"
          >
            <X size={21} />
          </button>
        </div>

        {/* Navigation */}
        <div className="mb-3 px-3 text-[11px] font-semibold tracking-widest text-gray-400 uppercase">
          Workspace
        </div>

        <nav className="flex flex-col gap-1">
          {menuItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <a
                key={item.name}
                href={item.path}
                onClick={() => setIsOpen(false)}
                className={`
                  flex items-center gap-3
                  px-3 py-3 rounded-xl
                  text-sm font-medium
                  transition-all duration-200
                  ${
                    index === 0
                      ? "bg-[#E8F0E9] text-[#315B43]"
                      : "text-[#747B75] hover:bg-[#EFF1EC] hover:text-[#315B43]"
                  }
                `}
              >
                <Icon size={19} strokeWidth={1.8} />
                {item.name}
              </a>
            );
          })}
        </nav>

        {/* AI Assistant */}
        <div className="mt-8 mb-3 px-3 text-[11px] font-semibold tracking-widest text-gray-400 uppercase">
          More
        </div>

        <div className="flex items-center gap-3 px-3 py-3 rounded-xl text-gray-400 text-sm cursor-not-allowed">
          <Sparkles size={19} />
          <span>AI Assistant</span>
          <span className="ml-auto text-[9px] bg-[#EDEDE8] px-2 py-1 rounded-md">
            Soon
          </span>
        </div>

        {/* Bottom Settings */}
        <div className="mt-auto pt-5 border-t border-[#EAEAE5]">
          <a
            href="/settings"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 px-3 py-3 rounded-xl text-sm text-[#747B75] hover:bg-[#EFF1EC] hover:text-[#315B43] transition"
          >
            <Settings size={19} />
            Settings
          </a>

          <div className="mt-4 p-3 rounded-xl bg-[#F0F1EB]">
            <p className="text-xs font-semibold text-[#405747]">
              Make every day count.
            </p>
            <p className="text-[11px] text-gray-500 mt-1">
              Your personal space to grow.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar
