import React, { useState } from 'react';
import { Search, ChevronDown, Filter, MoreHorizontal, ArrowUpDown, Eye, Calendar, Clock, User, Home } from 'lucide-react';

const TrackedEmailsPage = () => {
  // Sample data for tracked emails
  const trackedEmails = [
    {
      id: 1,
      subject: "Q1 Marketing Strategy",
      recipient: "marketing-team@company.com",
      sent: "Today, 9:45 AM",
      status: "Opened",
      opens: 12,
      clickRate: "35%",
      lastOpened: "10 min ago",
      important: true
    },
    {
      id: 2,
      subject: "Project Deadline Extension",
      recipient: "client@bigcorp.com",
      sent: "Yesterday, 4:20 PM",
      status: "Opened",
      opens: 3,
      clickRate: "100%",
      lastOpened: "2h ago",
      important: true
    },
    {
      id: 3,
      subject: "Invoice #8742",
      recipient: "accounts@partner.org",
      sent: "Yesterday, 11:32 AM",
      status: "Unopened",
      opens: 0,
      clickRate: "0%",
      lastOpened: "-",
      important: false
    },
    {
      id: 4,
      subject: "New Product Launch Details",
      recipient: "sales-team@company.com",
      sent: "Jan 28, 2025",
      status: "Opened",
      opens: 24,
      clickRate: "78%",
      lastOpened: "1d ago",
      important: true
    },
    {
      id: 5,
      subject: "Weekly Team Update",
      recipient: "team@company.com",
      sent: "Jan 27, 2025",
      status: "Opened",
      opens: 18,
      clickRate: "45%",
      lastOpened: "2d ago",
      important: false
    },
    {
      id: 6,
      subject: "Interview Schedule: Frontend Developer",
      recipient: "hr@company.com",
      sent: "Jan 25, 2025",
      status: "Unopened",
      opens: 0,
      clickRate: "0%",
      lastOpened: "-",
      important: false
    },
    {
      id: 7,
      subject: "Quarterly Budget Review",
      recipient: "finance@company.com",
      sent: "Jan 22, 2025",
      status: "Opened",
      opens: 7,
      clickRate: "29%",
      lastOpened: "5d ago",
      important: true
    }
  ];

  // State for filters
  const [activeFilter, setActiveFilter] = useState('all');

  // Filtered emails based on active filter
  const filteredEmails = activeFilter === 'all' 
    ? trackedEmails 
    : activeFilter === 'opened' 
      ? trackedEmails.filter(email => email.status === 'Opened')
      : trackedEmails.filter(email => email.status === 'Unopened');

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
          <div className="px-4 py-3 text-gray-400 flex items-center hover:bg-gray-800 cursor-pointer">
            <div className="bg-gray-700 rounded-full w-6 h-6 flex items-center justify-center mr-3">
              <Home size={14} className="text-gray-400" />
            </div>
            <span>Dashboard</span>
          </div>

          <div className="px-4 py-3 bg-gray-800 text-white flex items-center">
            <div className="bg-blue-500 rounded-full w-6 h-6 flex items-center justify-center mr-3">
              <Eye size={14} className="text-white" />
            </div>
            <span className="font-medium">Tracked Emails</span>
          </div>

          <div className="px-4 py-3 text-gray-400 flex items-center hover:bg-gray-800 cursor-pointer">
            <div className="bg-gray-700 rounded-full w-6 h-6 flex items-center justify-center mr-3">
              <Calendar size={14} className="text-gray-400" />
            </div>
            <span>Analytics</span>
          </div>

          <div className="px-4 py-3 text-gray-400 flex items-center hover:bg-gray-800 cursor-pointer">
            <div className="bg-gray-700 rounded-full w-6 h-6 flex items-center justify-center mr-3">
              <Clock size={14} className="text-gray-400" />
            </div>
            <span>Settings</span>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navigation */}
        <header className="bg-gray-800 p-4 flex items-center justify-between">
          <h1 className="text-xl font-bold">Tracked Emails</h1>

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
              <User size={16} />
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-6">
          {/* Action Bar */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center space-x-2">
              <button className="bg-blue-500 text-white px-4 py-2 rounded font-medium">
                New Tracked Email
              </button>
              <button className="bg-gray-800 text-gray-300 px-4 py-2 rounded font-medium flex items-center">
                <Filter size={16} className="mr-2" />
                Filter
              </button>
              <div className="relative">
                <select className="appearance-none bg-gray-800 text-gray-300 px-4 py-2 pr-8 rounded font-medium focus:outline-none">
                  <option>Last 30 days</option>
                  <option>Last 7 days</option>
                  <option>Last 90 days</option>
                  <option>All time</option>
                </select>
                <ChevronDown size={16} className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-lg flex">
              <button 
                className={`px-4 py-2 rounded-l-lg ${activeFilter === 'all' ? 'bg-blue-500 text-white' : 'text-gray-400'}`}
                onClick={() => setActiveFilter('all')}
              >
                All
              </button>
              <button 
                className={`px-4 py-2 ${activeFilter === 'opened' ? 'bg-blue-500 text-white' : 'text-gray-400'}`}
                onClick={() => setActiveFilter('opened')}
              >
                Opened
              </button>
              <button 
                className={`px-4 py-2 rounded-r-lg ${activeFilter === 'unopened' ? 'bg-blue-500 text-white' : 'text-gray-400'}`}
                onClick={() => setActiveFilter('unopened')}
              >
                Unopened
              </button>
            </div>
          </div>

          {/* Email Table */}
          <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-900">
                  <th className="py-3 px-4 text-left text-gray-400 font-medium text-sm border-b border-gray-700">
                    <div className="flex items-center">
                      <input type="checkbox" className="mr-3" />
                      <span>SUBJECT</span>
                      <ArrowUpDown size={14} className="ml-1" />
                    </div>
                  </th>
                  <th className="py-3 px-4 text-left text-gray-400 font-medium text-sm border-b border-gray-700">
                    <div className="flex items-center">
                      <span>RECIPIENT</span>
                      <ArrowUpDown size={14} className="ml-1" />
                    </div>
                  </th>
                  <th className="py-3 px-4 text-left text-gray-400 font-medium text-sm border-b border-gray-700">
                    <div className="flex items-center">
                      <span>SENT</span>
                      <ArrowUpDown size={14} className="ml-1" />
                    </div>
                  </th>
                  <th className="py-3 px-4 text-left text-gray-400 font-medium text-sm border-b border-gray-700">
                    <div className="flex items-center">
                      <span>STATUS</span>
                    </div>
                  </th>
                  <th className="py-3 px-4 text-left text-gray-400 font-medium text-sm border-b border-gray-700">
                    <div className="flex items-center">
                      <span>OPENS</span>
                      <ArrowUpDown size={14} className="ml-1" />
                    </div>
                  </th>
                  <th className="py-3 px-4 text-left text-gray-400 font-medium text-sm border-b border-gray-700">
                    <div className="flex items-center">
                      <span>CLICK RATE</span>
                    </div>
                  </th>
                  <th className="py-3 px-4 text-left text-gray-400 font-medium text-sm border-b border-gray-700">
                    <div className="flex items-center">
                      <span>LAST OPENED</span>
                    </div>
                  </th>
                  <th className="py-3 px-4 text-center text-gray-400 font-medium text-sm border-b border-gray-700">
                    <span>ACTIONS</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredEmails.map((email, index) => (
                  <tr 
                    key={email.id} 
                    className={`${index % 2 === 0 ? 'bg-gray-800' : 'bg-gray-900'} hover:bg-gray-700`}
                  >
                    <td className="py-3 px-4 border-b border-gray-700">
                      <div className="flex items-center">
                        <input type="checkbox" className="mr-3" />
                        <div>
                          <div className="flex items-center">
                            {email.important && (
                              <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                            )}
                            <span className="font-medium">{email.subject}</span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4 border-b border-gray-700">
                      <span className="text-gray-300">{email.recipient}</span>
                    </td>
                    <td className="py-3 px-4 border-b border-gray-700">
                      <span className="text-gray-400">{email.sent}</span>
                    </td>
                    <td className="py-3 px-4 border-b border-gray-700">
                      <span 
                        className={`rounded-full px-3 py-1 text-xs ${
                          email.status === 'Opened' 
                            ? 'bg-green-900 bg-opacity-30 text-green-500' 
                            : 'bg-gray-700 text-gray-400'
                        }`}
                      >
                        {email.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 border-b border-gray-700">
                      <span>{email.opens}</span>
                    </td>
                    <td className="py-3 px-4 border-b border-gray-700">
                      <span className={email.clickRate !== '0%' ? 'text-blue-400' : 'text-gray-400'}>
                        {email.clickRate}
                      </span>
                    </td>
                    <td className="py-3 px-4 border-b border-gray-700">
                      <span className="text-gray-400">{email.lastOpened}</span>
                    </td>
                    <td className="py-3 px-4 border-b border-gray-700 text-center">
                      <button className="text-gray-400 hover:text-white">
                        <MoreHorizontal size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex justify-between items-center mt-6">
            <div className="text-gray-400 text-sm">
              Showing <span className="text-white">{filteredEmails.length}</span> of <span className="text-white">{trackedEmails.length}</span> emails
            </div>
            <div className="flex space-x-2">
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
      </div>
    </div>
  );
};

export default TrackedEmailsPage;