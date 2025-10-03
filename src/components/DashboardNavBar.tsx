import { Bell, Search } from "lucide-react";

interface HeaderProps {
  title: string;
  userName: string;
}

function DashboardNavBar({ title, userName }: HeaderProps) {
  return (
    <header className="flex justify-between items-center bg-white p-4 shadow rounded-2xl mb-6">
      {/* Left: Page title */}
      <h1 className="text-xl md:text-2xl font-bold text-gray-800">{title}</h1>

      {/* Right: Actions */}
      <div className="flex items-center gap-4">
        {/* Search box */}
        <div className="hidden md:flex items-center bg-gray-100 px-3 py-2 rounded-lg">
          <Search size={18} className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none text-sm"
          />
        </div>

        {/* Notification bell */}
        <button className="relative">
          <Bell size={22} className="text-gray-600" />
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs px-1 rounded-full">
            3
          </span>
        </button>

        {/* User avatar */}
        <div className="flex items-center gap-2">
          <img
            src="https://i.pravatar.cc/40"
            alt="avatar"
            className="w-9 h-9 rounded-full border"
          />
          <span className="hidden md:block text-gray-700 font-medium">
            {userName}
          </span>
        </div>
      </div>
    </header>
  );
}

export default DashboardNavBar;
