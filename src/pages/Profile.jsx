import React, { useState } from "react";
import { Copy, Check } from "lucide-react";

const ProfilePage = () => {
  const [copiedUrl, setCopiedUrl] = useState(null);

  const trackingLinks = [
    { id: 1, url: "https://tracker.com/link1" },
    { id: 2, url: "https://tracker.com/link2" },
    { id: 3, url: "https://tracker.com/link3" },
  ];

  const handleCopy = (url) => {
    navigator.clipboard.writeText(url);
    setCopiedUrl(url);
    setTimeout(() => setCopiedUrl(null), 2000);
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 border-r border-gray-800 p-4">
        <div className="bg-blue-500 rounded p-3 text-center font-bold">
          Email Tracker
        </div>
        <nav className="mt-6">
          <div className="px-4 py-3 text-gray-400 hover:bg-gray-800 cursor-pointer rounded">
            Dashboard
          </div>
          <div className="px-4 py-3 text-gray-400 hover:bg-gray-800 cursor-pointer rounded">
            Tracked Emails
          </div>
          <div className="px-4 py-3 text-gray-400 hover:bg-gray-800 cursor-pointer rounded">
            Analytics
          </div>
          <div className="px-4 py-3 bg-gray-800 text-white rounded cursor-pointer">
            Profile
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col p-6">
        <h1 className="text-2xl font-bold mb-4">Profile</h1>

        {/* Profile Section */}
        <div className="bg-gray-800 p-6 rounded-lg mb-6">
          <h2 className="text-xl font-semibold">User Details</h2>
          <p className="text-gray-400 mt-2">John Doe</p>
          <p className="text-gray-400">johndoe@example.com</p>
        </div>

        {/* URL Links Section */}
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Tracking Links</h2>
          {trackingLinks.map((link) => (
            <div
              key={link.id}
              className="flex justify-between items-center bg-gray-700 p-3 rounded mb-2"
            >
              <span className="truncate">{link.url}</span>
              <button
                className="text-blue-400 hover:text-blue-500"
                onClick={() => handleCopy(link.url)}
              >
                {copiedUrl === link.url ? <Check size={18} /> : <Copy size={18} />}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;