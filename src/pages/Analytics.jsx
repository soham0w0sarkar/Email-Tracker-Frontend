import React, { useState } from 'react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { Search, ChevronDown, Download, Calendar, Clock, User, Home, Eye, RefreshCw } from 'lucide-react';

const AnalyticsPage = () => {
  const [timeRange, setTimeRange] = useState('Last 30 days');
  
  // Sample data for charts
  const openRateData = [
    { date: '01 Feb', rate: 45 },
    { date: '05 Feb', rate: 52 },
    { date: '10 Feb', rate: 49 },
    { date: '15 Feb', rate: 62 },
    { date: '20 Feb', rate: 58 },
    { date: '25 Feb', rate: 65 },
    { date: '01 Mar', rate: 59 }
  ];

  const clickRateData = [
    { date: '01 Feb', rate: 12 },
    { date: '05 Feb', rate: 18 },
    { date: '10 Feb', rate: 15 },
    { date: '15 Feb', rate: 22 },
    { date: '20 Feb', rate: 20 },
    { date: '25 Feb', rate: 24 },
    { date: '01 Mar', rate: 21 }
  ];

  const deviceData = [
    { name: 'Desktop', value: 58 },
    { name: 'Mobile', value: 32 },
    { name: 'Tablet', value: 10 }
  ];

  const locationData = [
    { name: 'United States', value: 45 },
    { name: 'Europe', value: 25 },
    { name: 'Asia', value: 18 },
    { name: 'Other', value: 12 }
  ];

  const hourlyOpenData = [
    { hour: '12am', opens: 5 },
    { hour: '3am', opens: 2 },
    { hour: '6am', opens: 8 },
    { hour: '9am', opens: 25 },
    { hour: '12pm', opens: 18 },
    { hour: '3pm', opens: 30 },
    { hour: '6pm', opens: 22 },
    { hour: '9pm', opens: 12 }
  ];

  const emailPerformanceData = [
    { name: 'Product Launch', sent: 120, opened: 95, clicked: 68 },
    { name: 'Weekly Update', sent: 85, opened: 65, clicked: 42 },
    { name: 'Special Offer', sent: 150, opened: 110, clicked: 82 },
    { name: 'Team Meeting', sent: 45, opened: 42, clicked: 38 }
  ];

  // Colors
  const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#6366F1'];
  const RADIAN = Math.PI / 180;

  // Custom label for pie chart
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
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
          <div className="px-4 py-3 text-gray-400 flex items-center hover:bg-gray-800 cursor-pointer">
            <div className="bg-gray-700 rounded-full w-6 h-6 flex items-center justify-center mr-3">
              <Home size={14} className="text-gray-400" />
            </div>
            <span>Dashboard</span>
          </div>

          <div className="px-4 py-3 text-gray-400 flex items-center hover:bg-gray-800 cursor-pointer">
            <div className="bg-gray-700 rounded-full w-6 h-6 flex items-center justify-center mr-3">
              <Eye size={14} className="text-gray-400" />
            </div>
            <span>Tracked Emails</span>
          </div>

          <div className="px-4 py-3 bg-gray-800 text-white flex items-center">
            <div className="bg-blue-500 rounded-full w-6 h-6 flex items-center justify-center mr-3">
              <Calendar size={14} className="text-white" />
            </div>
            <span className="font-medium">Analytics</span>
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
          <h1 className="text-xl font-bold">Email Analytics</h1>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search analytics..."
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
          {/* Time Range Selector */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <select 
                  className="appearance-none bg-gray-800 text-white px-4 py-2 pr-8 rounded font-medium focus:outline-none"
                  value={timeRange}
                  onChange={(e) => setTimeRange(e.target.value)}
                >
                  <option>Last 7 days</option>
                  <option>Last 30 days</option>
                  <option>Last 90 days</option>
                  <option>This year</option>
                </select>
                <ChevronDown size={16} className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
              <button className="bg-gray-800 text-gray-300 p-2 rounded">
                <RefreshCw size={16} />
              </button>
            </div>
            
            <button className="bg-gray-800 text-white px-4 py-2 rounded flex items-center">
              <Download size={16} className="mr-2" />
              Export Report
            </button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
              <div className="text-gray-400 text-sm mb-2">Average Open Rate</div>
              <div className="flex items-baseline">
                <div className="text-2xl font-bold mr-2">64.3%</div>
                <div className="text-green-500 text-xs">+5.7%</div>
              </div>
              <div className="text-xs text-gray-500 mt-1">vs previous period</div>
            </div>

            <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
              <div className="text-gray-400 text-sm mb-2">Average Click Rate</div>
              <div className="flex items-baseline">
                <div className="text-2xl font-bold mr-2">21.8%</div>
                <div className="text-green-500 text-xs">+2.3%</div>
              </div>
              <div className="text-xs text-gray-500 mt-1">vs previous period</div>
            </div>

            <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
              <div className="text-gray-400 text-sm mb-2">Total Emails Sent</div>
              <div className="flex items-baseline">
                <div className="text-2xl font-bold mr-2">587</div>
                <div className="text-red-500 text-xs">-12</div>
              </div>
              <div className="text-xs text-gray-500 mt-1">vs previous period</div>
            </div>

            <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
              <div className="text-gray-400 text-sm mb-2">Engagement Score</div>
              <div className="flex items-baseline">
                <div className="text-2xl font-bold mr-2">8.7</div>
                <div className="text-green-500 text-xs">+0.4</div>
              </div>
              <div className="text-xs text-gray-500 mt-1">vs previous period</div>
            </div>
          </div>

          {/* Charts Row 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Open Rate Trend */}
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold">Open Rate Trend</h2>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={openRateData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="date" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1F2937', borderColor: '#374151', color: '#fff' }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="rate" 
                      stroke="#3B82F6" 
                      strokeWidth={2} 
                      dot={{ r: 4, fill: '#3B82F6' }}
                      activeDot={{ r: 6 }}
                      name="Open Rate (%)"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Click Rate Trend */}
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold">Click Rate Trend</h2>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={clickRateData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="date" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1F2937', borderColor: '#374151', color: '#fff' }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="rate" 
                      stroke="#10B981" 
                      strokeWidth={2} 
                      dot={{ r: 4, fill: '#10B981' }}
                      activeDot={{ r: 6 }}
                      name="Click Rate (%)"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Charts Row 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {/* Device Breakdown */}
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold">Device Breakdown</h2>
              </div>
              <div className="h-64 flex justify-center items-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={deviceData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={renderCustomizedLabel}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {deviceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1F2937', borderColor: '#374151', color: '#fff' }}
                    />
                    <Legend 
                      layout="horizontal" 
                      verticalAlign="bottom" 
                      align="center"
                      formatter={(value) => <span className="text-gray-300">{value}</span>}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Location Breakdown */}
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold">Location Breakdown</h2>
              </div>
              <div className="h-64 flex justify-center items-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={locationData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={renderCustomizedLabel}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {locationData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1F2937', borderColor: '#374151', color: '#fff' }}
                    />
                    <Legend 
                      layout="horizontal" 
                      verticalAlign="bottom" 
                      align="center"
                      formatter={(value) => <span className="text-gray-300">{value}</span>}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Hourly Email Opens */}
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold">Hourly Email Opens</h2>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={hourlyOpenData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="hour" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1F2937', borderColor: '#374151', color: '#fff' }}
                    />
                    <Bar dataKey="opens" name="Opens" fill="#6366F1" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Email Performance */}
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 mb-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">Email Campaign Performance</h2>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={emailPerformanceData}
                  layout="vertical"
                  margin={{ top: 5, right: 30, left: 120, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis type="number" stroke="#9CA3AF" />
                  <YAxis dataKey="name" type="category" stroke="#9CA3AF" width={100} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1F2937', borderColor: '#374151', color: '#fff' }}
                  />
                  <Legend 
                    formatter={(value) => <span className="text-gray-300">{value}</span>}
                  />
                  <Bar dataKey="sent" name="Sent" fill="#9CA3AF" radius={[0, 0, 0, 0]} />
                  <Bar dataKey="opened" name="Opened" fill="#3B82F6" radius={[0, 0, 0, 0]} />
                  <Bar dataKey="clicked" name="Clicked" fill="#10B981" radius={[0, 0, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Recommendations */}
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
            <h2 className="text-lg font-bold mb-4">Recommendations to Improve Performance</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-900 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                  <h3 className="font-medium">Best Time to Send Emails</h3>
                </div>
                <p className="text-gray-400 text-sm">Based on your data, the best time to send emails is between 9 AM and 3 PM when engagement rates are highest.</p>
              </div>
              
              <div className="bg-gray-900 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <h3 className="font-medium">Subject Line Optimization</h3>
                </div>
                <p className="text-gray-400 text-sm">Emails with subject lines containing 6-10 words have 21% higher open rates. Keep subjects concise and action-oriented.</p>
              </div>
              
              <div className="bg-gray-900 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                  <h3 className="font-medium">Mobile Optimization</h3>
                </div>
                <p className="text-gray-400 text-sm">32% of your audience reads emails on mobile devices. Ensure all emails are responsive and test on multiple screen sizes.</p>
              </div>
              
              <div className="bg-gray-900 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                  <h3 className="font-medium">Content Segmentation</h3>
                </div>
                <p className="text-gray-400 text-sm">Segmented campaigns perform 58% better than non-segmented ones. Consider dividing your audience based on their interaction history.</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AnalyticsPage;