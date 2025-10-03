// src/App.tsx
import { useState } from "react";
import { Home, CreditCard, Wallet, Settings } from "lucide-react";

function Dashboard() {
  const [active, setActive] = useState("Dashboard");

  const menuItems = [
    { name: "Dashboard", icon: <Home size={20} /> },
    { name: "Cards", icon: <CreditCard size={20} /> },
    { name: "Transactions", icon: <Wallet size={20} /> },
    { name: "Settings", icon: <Settings size={20} /> },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-6 font-bold text-xl text-blue-600">FinBank</div>
        <nav className="mt-6">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => setActive(item.name)}
              className={`flex items-center gap-3 w-full px-6 py-3 text-left hover:bg-blue-50 transition ${
                active === item.name ? "bg-blue-100 text-blue-600 font-medium" : "text-gray-600"
              }`}
            >
              {item.icon}
              {item.name}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        {/* Navbar */}
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">{active}</h1>
          <div className="flex items-center gap-4">
            <span className="text-gray-600">Hi, Gustavo</span>
            <img
              src="https://i.pravatar.cc/40"
              alt="avatar"
              className="w-10 h-10 rounded-full border"
            />
          </div>
        </header>

        {/* Dashboard Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="p-6 bg-white rounded-2xl shadow">
            <h2 className="text-gray-500">Balance</h2>
            <p className="text-2xl font-bold">$12,450.00</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow">
            <h2 className="text-gray-500">Income</h2>
            <p className="text-2xl font-bold text-green-500">$4,200.00</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow">
            <h2 className="text-gray-500">Expenses</h2>
            <p className="text-2xl font-bold text-red-500">$1,750.00</p>
          </div>
        </section>

        {/* Transactions Table */}
        <section className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Transactions</h2>
          <table className="w-full border-collapse">
            <thead>
              <tr className="text-left text-gray-500 border-b">
                <th className="py-2">Date</th>
                <th className="py-2">Description</th>
                <th className="py-2">Amount</th>
                <th className="py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2">01 Oct 2025</td>
                <td>Salary</td>
                <td className="text-green-600">+ $2,000</td>
                <td>Completed</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">28 Sep 2025</td>
                <td>Netflix</td>
                <td className="text-red-600">- $12.99</td>
                <td>Completed</td>
              </tr>
              <tr>
                <td className="py-2">25 Sep 2025</td>
                <td>Transfer to Savings</td>
                <td className="text-red-600">- $500</td>
                <td>Pending</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
