
import Sidebar from "../components/sidebar";
import Navbar from "../components/Navbar";
import WelcomeSection from "../assets/features/dashboard/WelcomeSection";
import Dashboard from "../pages/Dashboard";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-[#FAFAF7]">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="min-h-screen lg:ml-[260px]">

        {/* Navbar */}
        <Navbar />
        <Dashboard/>

      </main>

    </div>
  );
};

export default MainLayout;
