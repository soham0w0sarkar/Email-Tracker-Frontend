import React from "react";
import TrackedEmailsPage from "./TrackedEmail";
import AnalyticsPage from "./Analytics";
import ProfilePage from "./Profile";
import {
  BarChart,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Search, ChevronDown, Bell, User } from "lucide-react";

const DashBoard = () => {
  const [currentTab, setCurrentTab] = React.useState(<DashBoardCompoment />);
  const [activeFilter, setActiveFilter] = React.useState("dashboard");

  const tabs = [
    { id: "dashboard", label: "Dashboard" },
    { id: "tracked-emails", label: "Tracked Emails" },
    { id: "analytics", label: "Analytics" },
    { id: "profile", label: "Profile" },
  ];

  const handleTabChange = (tabId) => {
    switch (tabId) {
      case "dashboard":
        setCurrentTab(<DashBoardCompoment />);
        break;
      case "tracked-emails":
        setCurrentTab(<TrackedEmailsPage />);
        break;
      case "analytics":
        setCurrentTab(<AnalyticsPage />);
        break;
      case "profile":
        setCurrentTab(<ProfilePage />);
        break;
      default:
        setCurrentTab(<DashBoardCompoment />);
    }
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 border-r border-gray-800">
        <div className="p-4">
          <div className="bg-blue-500 rounded p-3 text-center font-bold">
            Email Tracker
          </div>
        </div>

        <nav className="mt-6">
          {tabs.map((tab) => {
            return (
              <div
                className={`px-4 py-3 text-white flex items-center ${
                  activeFilter === tab.id ? "bg-gray-800" : ""
                }`}
                onClick={() => {
                  handleTabChange(tab.id);
                  setActiveFilter(tab.id);
                }}
              >
                <div
                  className={`rounded-full w-6 h-6 flex items-center justify-center mr-3 ${
                    activeFilter === tab.id ? "bg-blue-500" : "bg-gray-700"
                  }`}
                >
                  <span
                    className={`text-xs ${
                      activeFilter === tab.id ? "" : "opacity-50"
                    }`}
                  >
                    ●
                  </span>
                </div>
                <span className="font-medium">{tab.label}</span>
              </div>
            );
          })}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navigation */}
        <header className="bg-gray-800 p-4 flex items-center justify-between">
          <h1 className="text-xl font-bold">Dashboard Overview</h1>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search emails..."
                className="bg-gray-700 rounded-full py-1 px-4 text-sm text-gray-300 w-64"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <Search size={16} className="text-gray-400" />
              </button>
            </div>

            <div className="bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center">
              <span>JS</span>
            </div>
          </div>
        </header>

        {/* Main Dashboard */}
        {currentTab}

        {/* Footer */}
      </div>
    </div>
  );
};

const DashBoardCompoment = () => {
  // Sample data for the chart
  const activityData = [
    { date: "0/0", opens: 0 },
    { date: "18/02", opens: 10 },
    { date: "19/02", opens: 40 },
    { date: "20/02", opens: 35 },
    { date: "21/02", opens: 50 },
    { date: "22/02", opens: 60 },
    { date: "23/02", opens: 40 },
    { date: "24/02", opens: 70 },
  ];

  const recentEmails = [
    {
      id: 1,
      subject: "Project Proposal for Q1",
      recipient: "client@example.com",
      sent: "2h ago",
      status: "Opened",
      opens: 3,
      lastOpened: "10:15 AM",
    },
    {
      id: 2,
      subject: "Meeting Schedule Update",
      recipient: "team@company.org",
      sent: "5h ago",
      status: "Opened",
      opens: 5,
      lastOpened: "9:30 AM",
    },
    {
      id: 3,
      subject: "Invoice #1234",
      recipient: "accounts@client.net",
      sent: "8h ago",
      status: "Unseen",
      opens: 0,
      lastOpened: "-",
    },
    {
      id: 4,
      subject: "Product Demo Request",
      recipient: "prospect@newclient.com",
      sent: "Yesterday",
      status: "Opened",
      opens: 1,
      lastOpened: "Yesterday",
    },
  ];

  return (
    <main className="flex-1 overflow-y-auto p-4">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-gray-800 border border-gray-700 rounded p-4">
          <div className="text-gray-400 text-sm mb-2">Total Emails</div>
          <div className="flex items-baseline">
            <div className="text-2xl font-bold mr-2">128</div>
            <div className="text-green-500 text-xs">+12%</div>
          </div>
        </div>

        <div className="bg-gray-800 border border-gray-700 rounded p-4">
          <div className="text-gray-400 text-sm mb-2">Open Rate</div>
          <div className="flex items-baseline">
            <div className="text-2xl font-bold mr-2">68.5%</div>
            <div className="text-green-500 text-xs">+5.2%</div>
          </div>
        </div>

        <div className="bg-gray-800 border border-gray-700 rounded p-4">
          <div className="text-gray-400 text-sm mb-2">Avg. Time to Open</div>
          <div className="flex items-baseline">
            <div className="text-2xl font-bold mr-2">2.8h</div>
            <div className="text-red-500 text-xs">+0.5h</div>
          </div>
        </div>

        <div className="bg-gray-800 border border-gray-700 rounded p-4">
          <div className="text-gray-400 text-sm mb-2">Unique Opens</div>
          <div className="flex items-baseline">
            <div className="text-2xl font-bold mr-2">87</div>
            <div className="text-green-500 text-xs">+9%</div>
          </div>
        </div>
      </div>

      {/* Graph Section */}
      <div className="bg-gray-800 border border-gray-700 rounded p-4 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Email Activity</h2>
          <div className="bg-gray-700 rounded-full px-4 py-1 text-sm text-gray-400 flex items-center">
            Last 7 days
            <ChevronDown size={16} className="ml-1" />
          </div>
        </div>

        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={activityData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="date" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="opens"
                stroke="#3B82F6"
                strokeWidth={2}
                dot={{ r: 4, fill: "#3B82F6" }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Emails Table */}
      <div className="bg-gray-800 border border-gray-700 rounded p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Recent Tracked Emails</h2>
          <div className="flex space-x-2">
            <button className="bg-blue-500 rounded-full px-4 py-1 text-sm">
              All
            </button>
            <button className="bg-gray-700 rounded-full px-4 py-1 text-sm text-gray-400">
              Opened
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-gray-400 text-sm border-b border-gray-700">
                <th className="pb-2">Subject</th>
                <th className="pb-2">Recipient</th>
                <th className="pb-2">Sent</th>
                <th className="pb-2">Status</th>
                <th className="pb-2">Opens</th>
                <th className="pb-2">Last Opened</th>
              </tr>
            </thead>
            <tbody>
              {recentEmails.map((email, index) => (
                <tr
                  key={email.id}
                  className={index % 2 === 0 ? "bg-gray-800" : "bg-gray-900"}
                >
                  <td className="py-3">{email.subject}</td>
                  <td className="py-3">{email.recipient}</td>
                  <td className="py-3 text-gray-400">{email.sent}</td>
                  <td className="py-3">
                    <span
                      className={`rounded-full px-3 py-1 text-xs ${
                        email.status === "Opened"
                          ? "bg-green-900 bg-opacity-30 text-green-500"
                          : "bg-gray-700 text-gray-400"
                      }`}
                    >
                      {email.status}
                    </span>
                  </td>
                  <td className="py-3">{email.opens}</td>
                  <td className="py-3 text-gray-400">{email.lastOpened}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-center mt-6 space-x-2">
          <button className="rounded-full w-8 h-8 flex items-center justify-center bg-blue-500">
            1
          </button>
          <button className="rounded-full w-8 h-8 flex items-center justify-center bg-gray-700 text-gray-400">
            2
          </button>
          <button className="rounded-full w-8 h-8 flex items-center justify-center bg-gray-700 text-gray-400">
            3
          </button>
        </div>
      </div>
    </main>
  );
};

export default DashBoard;
