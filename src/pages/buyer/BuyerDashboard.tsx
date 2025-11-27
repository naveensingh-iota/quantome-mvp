import { useState } from "react";
import { Search, Filter, User, Bell, Settings, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

export const BuyerDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const recommendedTalents = [
    { id: 1, name: "Sarah Peterson", role: "Senior Pentester", status: "Available", color: "bg-green-500" },
    { id: 2, name: "James P. Auditor", role: "Senior Pentester", status: "Experienced", color: "bg-blue-500" },
    { id: 3, name: "Daniel Peterson", role: "Senior Pentester", status: "Available", color: "bg-green-500" },
    { id: 4, name: "Sarah P. Auditor", role: "Senior Pentester", status: "Available", color: "bg-green-500" },
    { id: 5, name: "Senior Pentester", role: "Senior Pentester", status: "Available", color: "bg-green-500" },
    { id: 6, name: "James P. Auditor", role: "Senior Pentester", status: "Available", color: "bg-green-500" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Left Sidebar */}
      <div className="w-16 bg-white border-r border-gray-200 flex flex-col items-center py-6 space-y-6">
        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
          S
        </div>
        <div className="flex-1 flex flex-col space-y-4">
          <button className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-gray-900">
            <div className="w-6 h-6 rounded bg-gray-200"></div>
          </button>
          <button className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-gray-900">
            <div className="w-6 h-6 rounded bg-gray-200"></div>
          </button>
          <button className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-gray-900">
            <div className="w-6 h-6 rounded bg-gray-200"></div>
          </button>
        </div>
        <button className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-gray-900">
          <Settings className="w-5 h-5" />
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Header */}
        <div className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <User className="w-5 h-5 text-gray-600" />
            <span className="text-sm font-medium text-gray-900">Onsite: 0 Day</span>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative">
              <Bell className="w-5 h-5 text-gray-600" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gray-300"></div>
              <ChevronDown className="w-4 h-4 text-gray-600" />
            </div>
          </div>
        </div>

        {/* Page Header */}
        <div className="px-8 py-6 bg-white border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            <div className="flex items-center gap-2">
              <Search className="w-5 h-5 text-gray-400" />
              <span className="text-sm text-gray-600">Search</span>
            </div>
          </div>
        </div>

        {/* Alert Banner */}
        <div className="mx-8 mt-6 p-4 bg-blue-600 rounded-lg flex items-center justify-between">
          <div className="text-white">
            <h3 className="font-semibold mb-1">Don't know where to start? We can help!</h3>
            <p className="text-sm text-blue-100">Find best Talents with us! We have a few results.</p>
          </div>
          <Button className="bg-white text-blue-600 hover:bg-gray-100">
            Let's go!
          </Button>
        </div>

        {/* Content Area */}
        <div className="flex-1 px-8 py-6">
          {/* Recommended Talents Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-semibold text-gray-900">Recommended Talents</h2>
                <span className="text-sm text-gray-500">18</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-9 w-64"
                  />
                </div>
                <Button variant="outline" size="sm" className="gap-2">
                  <Filter className="w-4 h-4" />
                  Filters
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {recommendedTalents.map((talent) => (
                <div key={talent.id} className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-gray-300 mb-3"></div>
                    <h3 className="font-semibold text-gray-900 mb-1">{talent.name}</h3>
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`w-2 h-2 rounded-full ${talent.color}`}></span>
                      <span className="text-sm text-gray-600">{talent.status}</span>
                    </div>
                    <span className="text-xs text-gray-500">{talent.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Open Problems Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-semibold text-gray-900">Open problems</h2>
                <span className="text-sm text-gray-500">08</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input placeholder="Search" className="pl-9 w-64" />
                </div>
                <Button variant="outline" size="sm" className="gap-2">
                  <Filter className="w-4 h-4" />
                  Filters
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-8 flex flex-col items-center">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <div className="w-8 h-8 bg-gray-300 rounded"></div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">You don't have published projects.</h3>
              <p className="text-sm text-gray-600 mb-4">
                You didn't have a time to publish what you need? Start it today!
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Start project
              </Button>
            </div>
          </div>

          {/* Upcoming Events Section */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-semibold text-gray-900">Upcoming events</h2>
                <span className="text-sm text-gray-500">2</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input placeholder="Search" className="pl-9 w-64" />
                </div>
                <Button variant="outline" size="sm" className="gap-2">
                  <Filter className="w-4 h-4" />
                  Filters
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-8 flex flex-col items-center">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <div className="w-8 h-8 bg-gray-300 rounded"></div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">You don't have published projects.</h3>
              <p className="text-sm text-gray-600 mb-4">
                You didn't have a time to publish what you need? Start it today!
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Start project
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-80 bg-white border-l border-gray-200 p-6 space-y-6">
        {/* Your Projects */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-3">Your projects</h3>
          <div className="space-y-2">
            <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-50 text-sm text-gray-700 flex items-center justify-between">
              <span>Wood Verification</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-50 text-sm text-gray-700 flex items-center justify-between">
              <span>Wood Verification</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Engagements */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-gray-900">Engagements</h3>
            <span className="text-xs text-gray-500">2</span>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-gray-300 shrink-0"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">Gaetan Roux</p>
                <p className="text-xs text-gray-500">Started Quantum Computers</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-gray-300 shrink-0"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">Gaetan Roux</p>
                <p className="text-xs text-gray-500">Started Quantum Computers</p>
              </div>
            </div>
          </div>
        </div>

        {/* Your Team */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-3">Your Team</h3>
          <div className="bg-gray-50 rounded-lg p-4 text-center">
            <p className="text-sm text-gray-600">No team members yet</p>
          </div>
        </div>

        {/* Unpublished Projects Alert */}
        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="text-sm font-semibold text-gray-900 mb-2">
            You don't have published projects.
          </h4>
          <p className="text-xs text-gray-600 mb-3">
            You didn't have a time to publish what you need? Start it today!
          </p>
          <Button className="w-full bg-blue-600 hover:bg-blue-700" size="sm">
            Start project
          </Button>
        </div>

        {/* Pending Payments */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-3">Pending payments</h3>
          <div className="bg-gray-50 rounded-lg p-4 text-center">
            <p className="text-sm text-gray-600">No pending payments</p>
          </div>
        </div>
      </div>
    </div>
  );
};